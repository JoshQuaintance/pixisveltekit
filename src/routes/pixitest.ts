import './pixi-shim';
import * as PIXI from '../pixijs/pixi';

export async function run(el: HTMLDivElement): Promise<void> {
    const app = new PIXI.Application({
        backgroundColor: 0xfa00f2,
        resizeTo: window,
        autoStart: false
    });

    el.appendChild(app.view);
    app.render();
}
