const $ = (node) => document.querySelector(node);
//유틸함수란 여러 부분에서 재사용 할 수 있는 독립 실행형 함수로 즉, 반복되는 명령을 줄일 수 있다.
// function $(node){
//     return document.querySelector(node)
// } //위에 유틸함수를 만들어 놓은 것 일반 함수식으로 사용하면 이렇게 쓸 수 있다.

// const tiger = document.querySelector('#tiger');

const tiger = $('#tiger');
const button = $('#button');
const time = $('#time');
const progress = $('#progressSlider');

const animation = gsap.to(tiger,{
    duration:6,
    motionPath: {
        path:'#route',
        align:tiger,
    },
    onUpdate: update,
    onComplete: ()=> button.textContent = 'play'
})

function update(){
    time.textContent = animation.time().toFixed(2)
    progress.value = animation.progress()
}


progress.addEventListener('input',(e)=>{
    const target = e.currentTarget;

    animation.progress(target.value).pause();
    button.textContent = 'play';

})

button.addEventListener('click',()=>{
    animation.paused(!animation.paused()) // 멈춰있는 상태에서(true->false로 바뀐 상태) 클릭을 했을 때, paused에 있는 false를 반환하면서 움직이게 됨.
    // paused에 토글 방식으로 주기 위해 !(반대)를 주어 true/false 두가지를 반복해서 반환함.

    if(animation.progress() === 1){
        animation.restart(); // 만약에 끝까지 도착했을 때, 다시 처음부터 시작해줘.
    }

    // if(animation.paused()){
    //     button.textContent = 'play' //textContent는 자바스크립트로 클릭했을 때 글자를 변환함.
    // }else{
    //     button.textContent='pause'
    // }

    button.textContent = animation.paused() ? 'play' : 'pause';

})

// ===는 동등 연산자로 타입이 다르면 false를 반환함. ==는 값을 비교하기 전 타입이 다를 경우 타입을 변환 후 값을 비교함.
// 문과 식이 있는데 문은 값을 반환하지 않음. 식은 값을 반환함.
// 문에서는 조건문(if, switch), 반복문, for, while, do..while
// 삼항연산자는 계산되는 피연산자가 3개, 즉 변수를 선언할 때 참인지 거짓인지에 따라 참값과 거짓값을 가져옴 - 알아야 함...


// gsap 코어를 위에 두고 그다음에 motionPath를 적어줘야 함.
// 하나의 트윈은 자동재생이 기본이다.
//paused는 재생과 정지 상태를 관리해주는 것을 말한다. 멈추면 true, 움직이면 false를 반환함. getter와 setter 방식으로 줄 수도 있음. setter은 ()안에 인수를 넣으면 세팅을 해줌.

// animation.pause() 는 정말 정지만 시켜주는 것.
// animation.timeScale() 은 배속을 나타내는 것.(duration은 아님)
// animation.time() 은 어느 시간 때에 재생하겠다고 시간을 정하는 역할도 있고 일정 시간까지 움직이는 것을 볼 수 있는 역할도 같이 할 수 있음.
// animation.progress()는 진행률로 애니메이션 총 시간대비 어느정도 갔는지 확인.(0~1초로 진행률을 나타냄.)
// getter-값 가져오기, settter-값 세팅하기



