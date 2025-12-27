import {Spine} from "pixi-spine"
import * as PIXI from "pixi.js";
import {CanvasArguments} from './constants.cjs';

class PlayerLegacy {
    app;
    src;
    baseUrl
    model;
    options;
    audio;
    playerInfo = {debug: false, hasDefault: true, mute: false};
    isPlaying = false;
    format;
    injectedSettings;

    constructor(options, src, format, settings) {
        document.title = `${src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))}`;
        this.src = src;
        this.format = format;
        this.injectedSettings = settings;
        this.baseUrl = src.substring(0, src.lastIndexOf('/') + 1);
        this.moveConfigs(options);
    }

    export(duration) {
        if (duration < 0) throw new Error('Error when parsing video duration!');
        let exporter = new MediaRecorder(this.app.view.captureStream(), {
            mimeType: 'video/mp4',
            videoBitsPerSecond: 25e6
        });
        let stream = [];
        exporter.ondataavailable = (event) => {
            if (event.data && event.data.size) {
                stream.push(event.data);
            }
        }
        exporter.start();
        setTimeout(() => {
            exporter.stop();
        }, duration * 1000);
        exporter.onstop = () => {
            let url = URL.createObjectURL(new Blob(stream, { type: 'video/mp4' }));
            let tmp = document.createElement('a');
            tmp.href = url;
            tmp.download = document.title + '_ExportedByBABMemory.mp4';
            tmp.click();
            tmp.remove();
            URL.revokeObjectURL(url);
        }
    }

    setup() {
        let width = this.options['width'], height = this.options['width'] * this.options['ratio'];
        let playerOptions = Object.assign({
            width: width,
            height: height,
        }, this.injectedSettings);
        this.app = new PIXI.Application(playerOptions);
        document.body.appendChild(this.app.view);
    }

    moveConfigs(options) {
        this.options = {
            width: 4096,
            mute: false,
            debug: false,
            noRepeat: false,
            animation: 'start_idle_01',
            ratio: 0.5625,
            fixed: false,
            export: false,
            lightFix: true,
            scale: 1.0,
            mode: CanvasArguments.FILL,
        }
        if (options.get('export') !== null) this.options['export'] = true;
        if (options.get('fixed') !== null) this.options['fixed'] = true;
        if (options.get('width') !== null) this.options['width'] = options.get('width');
        if (options.get('ratio') !== null) this.options['ratio'] = options.get('ratio');
        if (options.get('mute') !== null) this.options['mute'] = options.get('mute');
        if (options.get('noRepeat') !== null) this.options['noRepeat'] = true;
        if (options.get('animation') !== null) this.options['animation'] = options.get('animation');
        if (options.get('noLightFix') !== null) this.options['lightFix'] = false;
        if (options.get('scale') !== null && options.get('scale') >= 0.0) this.options['scale'] = options.get('scale');
        if (options.get('fill') !== null) this.options['mode'] = CanvasArguments.FILL;
        if (options.get('fit') !== null) this.options['mode'] = CanvasArguments.FIT;
    }

    getCanvasArguments() {
        let ret = {scale: 1, scaleX: 1, scaleY: 1, x: 0, y: 0};
        ret['scaleX'] = this.app.renderer.width / 3000 * this.options['scale'];
        ret['scaleY'] = this.app.renderer.height / 1687.5 * this.options['scale'];
        ret['scale'] = this.options['mode'] === CanvasArguments.FIT ? Math.min(ret['scaleX'], ret['scaleY']) : Math.max(ret['scaleX'], ret['scaleY']);
        ret['x'] = this.app.renderer.width / 2;
        ret['y'] = this.app.renderer.height;
        return ret;
    }

    resize() {
        if (window.innerWidth * this.options['ratio'] > window.innerHeight)
            this.app.renderer.resize(Math.min(this.options['width'], window.innerHeight / this.options['ratio']), window.innerHeight);
        if (window.innerHeight / this.options['ratio'] > window.innerWidth)
            this.app.renderer.resize(Math.min(this.options['width'], window.innerWidth), window.innerWidth * this.options['ratio']);

        let args = this.getCanvasArguments();
        this.model.scale.set(args['scale']);
        this.model.x = args['x'];
        this.model.y = args['y'];
        this.app.stage.addChild(this.model);
    }

    wrapJSON() {
        let data = {
            "model": `${this.src.substring(this.src.lastIndexOf('/') + 1, this.src.lastIndexOf('.'))}`,
            "modelSrc": `${this.src}`,
            "modelVer": `${this.model.state.data.skeletonData.version}`,
            "modelSize": [this.model.spineData.width, this.model.spineData.height],
            "modelLoader": "Legacy Loader",
            "animations": [],
            "animationDuration": [],
            "skins": []
        };
        for (let animation of this.model.state.data.skeletonData.animations) {
            data.animations.push(animation.name.toLowerCase());
            data.animationDuration.push(animation.duration);
        }
        for (let skin of this.model.state.data.skeletonData.skins) {
            data.skins.push(skin.name.toLowerCase());
        }
        return data;
    }

    fixLightExposure() {
        if (!this.options['lightFix']) return;
        let cnt = 0;
        for (let slot of this.model.skeleton.slots) {
            if (slot.blendMode === 1) {
                slot.blendMode = 3;
                cnt++;
            }
        }
        console.info(`Slot exposure fixed: ${cnt}/${this.model.skeleton.slots.length}`);
    }

    async play() {
        this.cleanup();
        PIXI.Assets.setPreferences({preferCreateImageBitmap: false}); // To fix the premultiply issue in pixi.js v7 happening on hoshino_midautumn
        PIXI.Assets.add({alias: 'skel', src: this.src + this.format});
        PIXI.Assets.add({alias: 'atlas', src: this.src + '.atlas'});

        const data = await PIXI.Assets.load(['skel', 'atlas']);
        if (this.src.includes('midautumn')) {
            // Force PMA Alpha - Fix rendering issues in hoshino_midautumn
            const atlas = PIXI.Assets.get('atlas');
            atlas.pages.forEach((page) => {
                page.baseTexture.alphaMode = PIXI.ALPHA_MODES.PMA;
            });
        }
        this.model = new Spine(data.skel.spineData);
        this.fixLightExposure();

        console.log(`Version: ${this.model.state.data.skeletonData.version}\nWidth: ${this.model.spineData.width}\nHeight: ${this.model.spineData.height}\nWH Ratio: ${this.model.spineData.width / this.model.spineData.height}`);
        this.setup();
        const animation = this.model.state.data.skeletonData.animations;
        let defaultAni = "";
        let duration = -1;
        for (let i of animation) {
            if (i.name.toLowerCase() === this.options['animation'].toLowerCase()) {
                defaultAni = i.name;
                duration = i.duration;
            }
        }

        if (defaultAni.length > 0) {
            this.model.state.setAnimation(1, defaultAni, !this.options['noRepeat']);
        } else {
            this.model.state.setAnimation(0, animation[0].name, !this.options['noRepeat']);
            duration = animation[0].duration;
            this.playerInfo.hasDefault = false;
        }
        if (this.options['export']) this.export(duration);
        this.resize();
        const debounce = (callback, delay) => {
            let interval;
            return function () {
                if (interval) {
                    clearTimeout(interval);
                }
                interval = setTimeout(() => {
                    callback()
                }, delay);
            }
        };
        const debouncer = debounce(this.resize.bind(this), 100);
        addEventListener("resize", debouncer);

        this.isPlaying = true;
        return this.wrapJSON();
    }

    cleanup() {
        this.clientWidth = 0;
        this.clientHeight = 0;
        if (this.app !== undefined) this.app.stage.removeChild(this.model);
        if (this.model !== undefined) this.model.destroy();
    }
}

export {
    PlayerLegacy
}