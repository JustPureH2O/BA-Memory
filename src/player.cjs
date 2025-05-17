import {Spine as SpineV4} from '@esotericsoftware/spine-pixi';
import * as PIXI from 'pixi.js';

class Player {
    app;
    src;
    baseUrl
    model;
    options;
    audio;
    playerInfo = {debug: false, hasDefault: true, mute: false};
    isPlaying = false;

    constructor(options, src = './assets/CH0273_home/CH0273_home.skel') {
        document.title = `${src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))}`;
        this.src = src;
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
            tmp.download = document.title + '_ExportedByBABMemory.webm';
            tmp.click();
            URL.revokeObjectURL(url);
        }
    }

    setup() {
        let width = this.options['width'], height = this.options['width'] * this.options['ratio'];
        this.app = new PIXI.Application({
            width: width,
            height: height,
            autoDensity: true
        });
        document.body.appendChild(this.app.view);
    }

    moveConfigs(options) {
        this.options = {
            width: 3092,
            mute: false,
            debug: false,
            noRepeat: false,
            animation: 'start_idle_01',
            ratio: 1080 / 1920,
            fixed: false,
            resolution: 3092,
            export: false
        }
        if (options.get('export') !== null) this.options['export'] = true;
        if (options.get('fixed') !== null) this.options['fixed'] = true;
        if (options.get('width') !== null) this.options['width'] = options.get('width');
        if (options.get('ratio') !== null) this.options['ratio'] = options.get('ratio');
        if (options.get('mute') !== null) this.options['mute'] = options.get('mute');
        if (options.get('noRepeat') !== null) this.options['noRepeat'] = options.get('noRepeat');
        if (options.get('animation') !== null) this.options['animation'] = options.get('animation');
    }

    getCanvasArguments() {
        let ret = {scale: 1, scaleX: 1, scaleY: 1, x: 0, y: 0};
        ret['scaleX'] = this.app.renderer.width / 3092 * Math.sqrt(window.devicePixelRatio);
        ret['scaleY'] = this.app.renderer.height / 1932.5 * Math.sqrt(window.devicePixelRatio);
        ret['scale'] = Math.max(ret['scaleX'], ret['scaleY']);
        ret['x'] = this.app.renderer.width / 2;
        ret['y'] = this.app.renderer.height;
        return ret;
    }

    resize() {
        if (window.innerWidth < this.options['width']) {
            this.app.renderer.resize(window.innerWidth, window.innerWidth * this.options['ratio']);
        } else {
            this.app.renderer.resize(this.options['width'], this.options['width'] * this.options['ratio']);
        }
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
            "modelSize": [this.model.width, this.model.height],
            "modelLoader": "SpineV4 Loader",
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

    async play() {
        this.cleanup();
        console.warn(`pixi-spine support for models created by Spine v4.2 or upper has yet unimplemented. spine-runtime from EsotericSoftware is used here!`);
        PIXI.Assets.add({alias: 'skel', src: this.src});
        PIXI.Assets.add({alias: 'atlas', src: this.src.replace('.skel', '.atlas')});
        await PIXI.Assets.load(['skel', 'atlas']);
        this.model = SpineV4.from("skel", "atlas");
        console.log(`Version: ${this.model.state.data.skeletonData.version}\nWidth: ${this.model.width}\nHeight: ${this.model.height}\nWH Ratio: ${this.model.width / this.model.height}`);
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
    Player
}
