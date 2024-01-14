const $ = node => document.querySelector(node);



gsap.to('svg',{autoAlpha:1})

const pixelPerSecond = 200; //rect의 박스의 너비를 지정해 줌. svg일 때
const animation = gsap.timeline();

animation
    .to('#star',{duration:1,x:1150})
    .to('#circle',{duration:2,x:1150})
    .to('#square',{duration:1,x:1150})

const children = animation.getChildren();
const childrenList = children.length

for(let i = 0; i < childrenList; i++){
    // console.log( children[i].startTime());

    gsap.set('#tween' + i,{x:children[i].startTime() * pixelPerSecond})
    gsap.set('#rect' + i,{width:children[i].duration() * pixelPerSecond})
    //rect 박스의 길이를 늘려주기 위해 곱하기를 해서

}







//startTime() 메서드는 재생되는 시간을 알려주는 것.
//getChildren 메서드는 tween의 값을 배열로 보여줌.










