const $ = (node) => document.querySelector(node);
//유틸함수란 여러 부분에서 재사용 할 수 있는 독립 실행형 함수로 즉, 반복되는 명령을 줄일 수 있다.
// function $(node){
//     return document.querySelector(node)
// } //위에 유틸함수를 만들어 놓은 것 일반 함수식으로 사용하면 이렇게 쓸 수 있다.

// const tiger = document.querySelector('#tiger');

const tiger = $('#tiger');


gsap.to(tiger,{
    duration:6,
    motionPath: {
        path:'#route',
        align:tiger,
    }
});

 // gsap 코어를 위에 두고 그다음에 motionPath를 적어줘야 함.


