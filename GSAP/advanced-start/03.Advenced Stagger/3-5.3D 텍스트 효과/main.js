


const duration = 0.2; //동일하게 관리되는 애들은 변수를 따로 빼서 쓰는 것이 좋움. stagger에 변수를 넣어준걸 볼 수 있음.//
//더빨리 나오게 하고 싶으면 값을 줄이면 됨.//

const numberOfTargtets = gsap.utils.toArray('.utils > div').length
const pause = 1.2;
//pause도 마찬가지로 duration과 같이 값을 조절해서 멈춰있는 시간을 자유롭게 할 수 있음//
const stagger = duration + pause;
const delay = stagger * (numberOfTargtets - 1) + pause;
//빼기를 우선순위로 주기 위해서 구름 연산자로 ()를 묶어주기//



const tl = gsap.timeline();

gsap.set('.utils > div',{transformOrigin: '50% 50% -50'}) //x,y,z 순으로 되어있음.//



tl.from('.utils > div',{
    rotationX:-90,
    rotationY:-50,
    opacity:0,
    duration: duration,
    stagger:{
        each: stagger,
        repeat:-1,
        repeatDelay:delay
    }
})

.to('.utils > div',{
    rotationX:90,
    rotationY:50,
    duration:duration, //duration을 주는 이유는 직접 컨트롤 하기 위해서 기본 값인 0.5외에 값을 지정하기 위해서 //
    opacity: 0,
    stagger:{
        each: stagger,
        repeat:-1,
        repeatDelay:delay
    }
},stagger)
// 포지션 파라미터에다 모든 타임라인에 0.5초를 절대값으로 주면 그 시간에 실행되게끔 해줌.//



//딜레이를 계산해 줄 때 개수의 빼기 1을 한 후 현재의 재생시간을 곱해준다. repeatDelay = duration* (numberOfTargets -1) //
//0.5가 모든 트윈의 기본 값으로 들어감.//