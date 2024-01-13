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

function setButtonState(){
    button.textContent = animation.paused() ? 'play' : 'pause'; //일일이 써주기 번거로울 때는 함수로 담아서 써주면 편함. 버튼의 이름을 변경해주는데 애니메이션이 멈췄을 때 play, pause인지 텍스트의 이름을 변경하려는 것
}

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


gsap.to(animation,{time:3,duration:5});


//각 버튼을 클릭했을 때, 클릭한 버튼으로 가는 루트 만들기
const home = $('#home');
const mountain = $('#mountain');
const river = $ ('#river');
const company =$('#company');
const svg = $('svg');

svg.addEventListener('click',(e)=>{
    const target = e.target.closest('g');
    if(!target) return;

    const id = target.getAttribute('id');
    if(!id) return;
    if(id === 'svg') return; //===은 일치 연산자로 자료형 변환 없이 두 피연산자가 엄격히 같은지 판별

    let progress = 0;
    animation.pause();

    switch (id) {
        case 'home':
            progress = 0;
            break;

        case 'mountain':
            progress = 0.21;
            break;

        case 'river':
            progress = 0.47;
            break;

        case 'company':
            progress = 1;
            break;
    }

    gsap.to(animation,{progress:progress,duration:1});
    setButtonState();
})
//클릭 이벤트를 사용했을 때 자바스크립트에서 제공해주는 메서드 (너 클릭 이벤트 사용했네? 객체 하나줄게)

//e.target은 마우스를 처음 만난 대상을 타겟에 감을 수 있음(이벤트 버블링의 기초)
//closest는 내가 선택한 대상에 가장 인접한 태그를 찾아주는 역할을 하는 것. $0.closest('')
//getAttribute는 DOM 특정 대상의 속성을 가지고 올때 쓰이는 것. $0로 특정 DOM을 클릭하고, DOM의 특정 값을 가지고 오고싶을때 $0.getAttribute('')

// home.addEventListener('click',()=>{
//     animation.pause(); //pause가 없으면 클릭한 버튼 앞에서 멈추지 않고 끝나는 지점까지 움직이기 때문에 멈추는 애니메이션 효과를 줘야함.
//     gsap.to(animation,{progress:0,duration:3})
// })
// mountain.addEventListener('click',()=>{
//     animation.pause();
//     gsap.to(animation,{progress:0.24,duration:10})
// })
// river.addEventListener('click',()=>{
//     animation.pause(); //
//     gsap.to(animation,{progress:0.53,duration:3})
// })
//
// company.addEventListener('click',()=>{
//     animation.pause();
//     gsap.to(animation,{progress:1,duration:3})
// })
//이벤트 위임 event delegation으로 위에 짠 코드들은 중복적이고 클릭해야 하는 대상이 늘어날 경우 이벤트 핸들러가 계속 증가하게 되므로 중복되는 코드를 줄이고 간편하게 사용할 수 있음.




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



