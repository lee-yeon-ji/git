
// gsap.registerPlugin(GSDevTools, SplitText);



gsap.set('.stage',{autoAlpha:1})  

gsap.registerEffect({
    name:'textEffect',
    extendTimeline:true, //타임라인을 확장하는 것으로 밑에 add부터해서 블라블라 써주지 않아도 됨.
    defaults:{
        y:-100,
        colors:['red','orange']
    },

    effect:(target,config)=>{

    const split = new SplitText(target,{type:'chars'});


        const tl = gsap.timeline();
        tl.from(split.chars,{y:config.y,opacity:0,stagger:0.05})
            .to(split.chars,{color:gsap.utils.wrap(config.colors)})

        return tl; // 타임라인 자체를 리턴하게 되면 만든 타임라인이 리턴 됨. 이 타임라인을 가지고 순차적으로 애니메이션을 추가 할 수 있음.
    }
})


const animation = gsap.timeline(); // animation이라는 큰 타임라인 안에 애니메이션을 추가해서 쓸 수 있음.

animation.textEffect('h1')
            .textEffect('h2',{y:'random(-100,100)',colors:['blue','green']})

//
// animation.add(gsap.effects.textEffect('h1'))
// animation.add(gsap.effects.textEffect('h2',{y:100,colors:['blue','green']}))
//
//
// gsap.effects.textEffect('h1')
// gsap.effects.textEffect('h2',{y:100,colors:['blue','green']})
//
//
// const tl = gsap.timeline();
// tl.from(split.chars,{y:-100,opacity:0,stagger:0.05})
//     .to(split.chars,{color:gsap.utils.wrap(['red','orange'])})
//
