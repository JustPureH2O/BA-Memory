import * as Query from "./constants.cjs";

const param = new URLSearchParams(window.location.search);

if (param.get('appreciation') === null) {
    const info = document.getElementById("info");
    info.innerHTML = `Powered by <i>BA Memory</i> by <b>JustPure<span style="color:#0080C0">H</span><sub style="color:#FF9800">2</sub><span style="color:#0080C0">O</span></b></footer>`;
}
let src = './assets/Azusa_home/Azusa_home.skel';
let ret = Query.queryByName(param.get('name'));
if (ret && ret[0] !== undefined) src = ret[0];
let Canvas;
if (ret && ret[1] === true) import("./player.cjs").then(Player => {
    Canvas = new Player.Player(param, src);
    Canvas.play().then((res) => {window.postMessage(JSON.stringify(res, null, 4), '*')});
});
else import("./player_legacy.cjs").then(PlayerLegacy => {
    Canvas = new PlayerLegacy.PlayerLegacy(param, src);
    Canvas.play().then((res) => {window.postMessage(JSON.stringify(res, null, 4), '*')});
});
