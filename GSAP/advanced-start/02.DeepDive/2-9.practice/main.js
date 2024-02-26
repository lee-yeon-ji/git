gsap.set('.bg',{opacity:0})

//registerEffect를 이용해서 반복되는 코드를 하나로 저장해서 돌려서 쓰기
gsap.registerEffect({
    name:'textEffect',
    extendTimeline:true,
    defaults:{
        y:30,
        opacity:0
    },
    effect:(target, {y,opacity})=>{
        // const {y,opacity} = config;
        const {chars} = new SplitText(target,{type:'chars'})

        const tl = gsap.timeline();

        tl.from(chars,{y:y,opacity:opacity,stagger:0.1})
            .to(chars,{delay:1,opacity:opacity,stagger:0.03})

        return tl

    }
})

const animation = gsap.timeline

gsap.effects.textEffect('.ex1')


