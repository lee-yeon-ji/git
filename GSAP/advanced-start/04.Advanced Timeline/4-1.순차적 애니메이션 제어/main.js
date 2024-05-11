
const $ = node => document.querySelector(node);



const tl = gsap.timeline({
    defaults:{
        scale:0,
        opacity:0,
        duration:1
    }
});


tl.from('.tiger[data-name="a0"]', {})
    .addPause() //레이블을 추가해서 특정 이름대로 재생이 될 수 있도록 함. 이 레이블은 애니메이션이 재생되고 멈출 수 있도록 함.//
    .from('.tiger[data-name="a1"]', {y: 100, rotation: 360})
    .addPause()
    .from('.tiger[data-name="a2"]', {y: -100, rotation: 360})
    .addPause()
    .from('.tiger[data-name="a3"]', {scale: 2, rotation: -360})





const prev = $('.prev');
const next = $('.next');

prev.addEventListener('click',()=>{
    tl.reverse() //역으로 재생 시키는//
})


next.addEventListener('click',()=>{
    tl.play() //다시 재생 시키는//

})





















