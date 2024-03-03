

// GSDevTools.create()


const {chars} = new SplitText('h1',{type:'chars'})
const disX = gsap.utils.distribute({
    base:-300,
    amount:600,
}) //기본의 값에서 두배인 값으로  base가 -200이면 amount는 +400으로 적으면 양 옆을 균일하게 퍼지게 할 수 있음.

const tl = gsap.timeline({
        repeat: -1, //함수기반으로 따로 함수를 빼서 사용하지 않고, 여기다 repeat: -1을 주므로써 무한반복으로 나올 수 있도록 할 수 있음.
});

tl.from(chars,{
    y:gsap.utils.wrap([-10,10]),
    opacity:0,
    filter:'blur(10px)', //블러 처리 할 때 10px 이상으로 하면 멈출 수 있으므로 주의
    stagger:{
        each:0.1,
        from:'center'
    }


})

.to(chars,{
    delay:1,
    x:disX,
    duration:3,
    ease:'power3.inOut'
})

.to(chars,{
    delay: -1,
    opacity:0,
    filter:'blur(10px)',
    stagger:{
        each: 0.1,
        from:'edges'
    }
})