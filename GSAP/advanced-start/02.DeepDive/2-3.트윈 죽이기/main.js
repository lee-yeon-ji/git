

gsap.to('.orange, .blue',{
    rotation:360,
    repeat:-1,
    ease:'linear',
    scale:1.2,
    duration:1.2,
    yoyo:true
})

const button = document.querySelector('button');

button.addEventListener('click',()=>{
    gsap.killTweensOf('.blue','rotation')
})
//killTweensOf는 트윈을 죽이는 것으로 선택자의 트윈을 전부 없앨건지 아니면 선택자의 특정 트윈만 지정해서 없앨건지 할 수 있음.