
gsap.to('.stage',{autoAlpha:1}) //숨겨진 글자나 이미지를 나타나게 하는 것.


const split = new SplitText('h1',{type:'chars'})
const tl = gsap.timeline();


tl.from(split.chars,{
    y: gsap.utils.wrap([100,-100]), //위아래로 웨이브 처럼 구현하고 싶을 때, 배열을 사용해서 쓸 수 있음.
    opacity:0,
    stagger:{ //stagger는 옵션을 넣을 수 있음. 각 트윈에 시간을 지연시키는
        each:0.02,
        from:'random' // 종류는 end, center, edges, random 아무것도 적지 않으면 왼쪽부터 시작함.
    }
})
    .to(split.chars,{
        x:10,
        y:gsap.utils.wrap([0,200,0,200,0]),//gsap.utils.wrap([])은 각각 다른 효과를 주고싶은 곳에 적용하면 다양한 효과를 볼 수 있을 것 같음.
        color:gsap.utils.wrap(['red','blue']),
        stagger: {
            each: 0.02,
            from: 'end'
        }
    })




GSDevTools.create()