//import { brotliDecompressSync } from "zlib";

console.log('test');


let video = document.querySelector("video");


let ttime = 0;
video.onplay = function () {
    setInterval(function () {
        ttime += 0.1;
        zetClasses();
    }, 100);
}



function zetClasses() {
    if (ttime > 0.525 && ttime < 2.43) {
        document.body.classList.add('text1');
    }
    if (ttime > 2.43 && ttime < 2.564) {
        document.body.classList.remove('text1')
    }
    if (ttime > 2.565 && ttime < 3.964) {
        document.body.classList.add('text2');
    }
    if (ttime > 3.964) {
        document.body.classList.remove('text2')
    }
    if (ttime > 4.445 && ttime < 5.673) {
        document.body.classList.add('text3');
    }
    if (ttime > 5.677) {
        document.body.classList.remove('text3')
    }
    if (ttime > 5.7 && ttime < 6.5) {
        document.body.classList.add('text4');
    }
    if (ttime > 6.51) {
        document.body.classList.remove('text4')
    }
    if (ttime > 7.445 && ttime < 8.5) {
        document.body.classList.add('text4');
    }
    if (ttime > 8.5) {
        document.body.classList.remove('text4')
    }
    if (ttime > 9.445 && ttime < 10.5) {
        document.body.classList.add('text4');
    }
    if (ttime > 10.5) {
        document.body.classList.remove('text4')
    }
    if (ttime > 11.445 && ttime < 12.0) {
        document.body.classList.add('text4');
        document.body.classList.add('clang');
    }
    if (ttime > 12.0) {
        document.body.classList.remove('text4')
        document.body.classList.remove('clang')
    }
    if (ttime > 12.245 && ttime < 13.205) {
        document.body.classList.add('text5');
    }
    if (ttime > 13.245) {
        document.body.classList.remove('text5')
    }
    if (ttime > 13.445 && ttime < 14.878) {
        document.body.classList.add('text6');
    }
    if (ttime > 14.9) {
        document.body.classList.remove('text6')
    }
    if (ttime > 15.3 && ttime < 16.8) {
        document.body.classList.add('squish');
    }
    if (ttime > 16.8) {
        document.body.classList.remove('squish')
    }
    if (ttime > 16.925 && ttime < 17.445) {
        document.body.classList.add('text7');
    }
    if (ttime > 17.415) {
        document.body.classList.remove('text7')
    }
    if (ttime > 18.005 && ttime < 20.439) {
        document.body.classList.add('text8');
    }
    if (ttime > 20.439) {
        document.body.classList.remove('text8')
    }
    if (ttime > 20.5 && ttime < 21.150) {
        document.body.classList.add('hmm');
    }
    if (ttime > 21.150) {
        document.body.classList.remove('hmm')
    }
    if (ttime > 21.285 && ttime < 24.482) {
        document.body.classList.add('text9');
    }
    if (ttime > 24.482) {
        document.body.classList.remove('text9')
    }
    if (ttime > 24.645 && ttime < 28.684) {
        document.body.classList.add('text10');
    }
    if (ttime > 28.684) {
        document.body.classList.remove('text10')
    }
    if (ttime > 28.885 && ttime < 30.477) {
        document.body.classList.add('text11');
    }
    if (ttime > 30.477) {
        document.body.classList.remove('text11')
    }
    if (ttime > 32.565 && ttime < 34.1) {
        document.body.classList.add('scratch')
    }
    if (ttime > 34.1) {
        document.body.classList.remove('scratch')
    }
    if (ttime > 31.205 && ttime < 35.244) {
        document.body.classList.add('text12');
    }
    if (ttime > 35.244) {
        document.body.classList.remove('text12')
    }
} if (ttime > 110.485 && ttime < 111.964) {
    document.body.classList.add('text13');
}
if (ttime > 71.964) {
    document.body.classList.remove('text13')

}