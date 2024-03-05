


const duration = 1 //동일하게 관리되는 애들은 변수를 따로 빼서 쓰는 것이 좋음. stagger에 변수를 넣어준걸 볼 수 있음.

const tl = gsap.timeline();

gsap.set('.utils > div',{transformOrigin: '50% 50% -50'}) //x,y,z 순으로 되어있음.


tl.from('.utils > div',{
    rotationX:-90,
    rotationY:-90,
    opacity:0,
    stagger: duration
})

.to('.utils > div',{
    rotationX:90,
    rotationY:90,

    opacity: 0,
    stagger: duration
},duration)// 포지션 파라미터에다 모든 타임라인에 0.5초를 절대값으로 주면 그 시간에 실행되게끔 해줌.