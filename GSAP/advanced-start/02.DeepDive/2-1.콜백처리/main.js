const $ = node => document.querySelector(node);

const h1 = $('h1'); //전체 문서에 중에 h1인 태그를 매개변수로 넣음.

//  callback -> 나중에 일어나는 일 

// onComplete 은 애니메이션이 끝나고 난 뒤에 일어나는 일을 정의하는 것.
// onUpdate 은 재생하는 기간동안만 작동하는 것.
// onStart 은 시작이 될 때 한번만 실행되는 것.
// onRepeat 은 반복을 얼마큼 하고있는지 알려주는 것.


gsap.to('.orange',{
    duration:2.5,
    y:100,
    onComplete: complete,
    onCompleteParams:['오렌지'], //전달해야 할 때 배열로 전달해야 함. params는 배열로 만들어 둔 뒤 앞에 onComplete를 실행 한 뒤에 나중에 전달하는 것.
    onUpdate(){
        h1.textContent = '애니메이션 작동 중'
    }
})


function complete(color){ //color는 매개변수
    console.log(this.targets(),[0]); //targets는 배열로 가지고오는 함수.
    h1.textContent = `${color} 애니메이션 재생 끝` //ES6를 기준으로 할 때는 이렇게 작성
    //ES5에서 작성 할 땐, h1.textContent = color + ' 애니메이션 재생 끝'
    gsap.to('.orange',{rotation:360})
}



// onComplete 자체가 함수이기 때문에 아래와 같이 함수의 이름을 만들고 따로 빼서 함수를 적어줘도 됨.
//gsap.to('.orange',{
// onComplete: complete
// })

// function complete(){
//     console.log("end");
// }


//
//
// const user= {
//     name : 'tiger',
//     age : '33',
//     sayHi : function (){ //일반 함수
//     },
//
//     sayBye : () => { //화살표 함수
//     },

//     sayHi(){ //concise 함수(축약, 간결한 함수)
//     }
// }
//
// user.sayHi();
//
// 자바스크립트에서 {} 중괄호로 열고 닫히는 애들은 '객체'이다.
// 객체는 key : value로 이루어져있다.
// 객체 안에 함수를 받을 수 있다.
// 그 함수가 method이다.
// 객체 method를 정의 할 수 있는 방법은 3가지 정도이다.
// 일반함수, 화살표 함수, concise 함수
// this를 찾을 때는 화살표 함수를 쓰는 것을 권하지 않는다. 이유는 부모를 통해서 가지고 오기 때문.












