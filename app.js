window.onload = function(){

    let tl1 = new TimelineMax();

    tl1
    .from('.sphere', 0.8, {delay: 0.1, scale: 0, top:"50%", left:"50%", opacity: 0, ease: Back.easeOut.config(1.7)})

    .to('.intro-container', 1, {top: 80, left: 82, right: 82, bottom: 80}, '+0.15')

    .to('.sphere', 1, {left:'75%', ease: Back.easeOut.config(2.7)})
}