

//distribute는 유틸 메서드는 배열 또는 그리드의 항목 전체에 값을 배포할 때 사용됨.

const value = gsap.utils.distribute({
    base:0,
    amount:400,
    ease:'power3',
    from:'center'
})

gsap.to('.bar',{
    height:value,
    duration:2,
    stagger:{
        each:0.1,
        from:'center'

    },
})


GSDevTools.create()
