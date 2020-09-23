import * as _ from "lodash";
function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "test 5";

    return element;

}

document.body.appendChild(component());

// @ts-ignore
import {gsap} from "gsap"
// @ts-ignore
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

gsap.to("#menu-item-1", {
    duration: 2,
    repeat: 5,
    repeatDelay: 3,
    yoyo: true,
    ease: "power1.inOut",
    motionPath:{
        path: "#menu-path",
        align: "#menu-path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
});
console.log('demo start', 'demo start');