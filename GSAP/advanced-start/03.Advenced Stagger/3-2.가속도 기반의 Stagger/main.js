











gsap.from('.stage > div',{
        duration:2,
        opacity:0,
        scale:0,
        ease:'power3.inOut', //scale과 opacity에 관한 가속도로 stagger 안에서 주는 가속도와는 다름.
        stagger:{
                each:0.2,
                ease:'power3', //가속도를 none, linear의 기본 속성 외에 추가적으로 속성을 추가해서 다양한 효과를 줄 수 있음.
                from:'center'
        }
})