const $ = (node) => document.querySelector(node);
//유틸함수란 여러 부분에서 재사용 할 수 있는 독립 실행형 함수로 즉, 반복되는 명령을 줄일 수 있다.
// function $(node){
//     return document.querySelector(node)
// } //위에 유틸함수를 만들어 놓은 것 일반 함수식으로 사용하면 이렇게 쓸 수 있다.

// const tiger = document.querySelector('#tiger');

const tiger = $('#tiger');


const animation = gsap.to(tiger,{
    duration:6,
    motionPath: {
        path:'#route',
        align:tiger,
    }
})

 // gsap 코어를 위에 두고 그다음에 motionPath를 적어줘야 함.
// 하나의 트윈은 자동재생이 기본이다.
//paused는 재생과 정지 상태를 관리해주는 것을 말한다. 멈추면 true, 움직이면 false를 반환함. getter와 setter 방식으로 줄 수도 있음. setter은 ()안에 인수를 넣으면 세팅을 해줌.

// animation.pause() 는 정말 정지만 시켜주는 것.


console.log(animation.paused());