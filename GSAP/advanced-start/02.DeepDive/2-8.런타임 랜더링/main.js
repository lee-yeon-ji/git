



const tl = gsap.timeline({
    defaults:{
        duration:2
    }
})

tl.from('.orange',{opacity:0,y:50})
    .from('.pink',{opacity:0,y:-50})
    .from('.blue',{opacity:0,scale:1.2})
    .from('.orange',{opacity:0,immediateRender:false})
//맨 마지막 오렌지는 실행하기 위해서 첫번째 오렌지의 지정 값을 기억하는데 마지막 오렌지가 안보였다가 나타나게 하기 위해서는 immediateRender가 false여야 함. 기본이 true 값을 가지고 있기 때문에

GSDevTools.create()