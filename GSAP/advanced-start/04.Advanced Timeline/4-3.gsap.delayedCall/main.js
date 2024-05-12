

// 타임라인 자체를 멈추고 다시 재생 시키는 방법은?

let tl = gsap.timeline()
.to('.orange',{duration:2,x:300})
    .addPause('>',gsap.delayedCall,[2,()=> tl.play() ])
.to('.blue',{duration:2,x:300})




//'>'는 애니메이션이 끝나는 시점에서 같이 가져가는 것, '<'는 애미메이션이 시작하는 시점에서 같이 가져가는 것.//
//delayedCall은 지연된 콜백을 실행시켜주는 역할


GSDevTools.create({animation:tl})