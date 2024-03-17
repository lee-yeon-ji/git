





// repeat:-1으로 무한반복 일때는 onComplete를 사용해서 완료콜백을 사용할 수 없다. 끝나지 않고 무한 반복이니까
//




// gsap.to('.tiger> div',{
//   y:100,
//
//   stagger:{
//     each:0.2,
//     repeat:1,
//     yoyo:true,
//     onComplete(){
//       gsap.to(this.targets()[0],{
//         rotation:360
//       })
//     }
//   }
// })
//
//
//
//
//

//위에는 타이거를 움직이게 하는 코드//


// const {chars,lines,words} = new SplitText('.word > div');
// const tl = gsap.timeline();
//
//
//
// tl.from(chars,{
//   opacity:0,
//   duration:2,
//   stagger:{
//     each:0.1,
//     from:'random',
//     ease:'power1', //점점 빠르게 나오는 해주는 가속도//
//     onComplete(){
//       gsap.to(this.targets()[0],{
//         delay:0.5,
//         duration: 0,
//         color:'#51ff00'
//       })
//     },
//   }
// })
//
// .to(lines,{
//   delay:1, //from에서 애니메이션을 시작할 때 OnComPlete가 끝날 때까지 기다려 주지 않기 때문에 delay이를 줘서 위에 애니메이션이 끝난 뒤에 실행 할 수 있도록 해줘야함.//
//   y:30,
//   opacity:0,
//   stagger:{
//     each:0.3,
//     from:'end'
//   }
// })
//두번 째 word를 움직이게 하는 코드//





const l = 8 * 13;

for(let i = 0; i < l; i++){
  let template = /* html */`
    <div class="box"></div>
  `
  document.querySelector('.stage')?.insertAdjacentHTML('beforeend',template)

}


const tween = gsap.to('.box',{
  scale:0.3,

  stagger:{
    each:0.5,
    onStart(){
      const target = this.targets()[0];

      if(target.dataset.stop === 'stop'){
        tween.pause( this.startTime())//각 재생시간이 있는 box 를 눌렀을 때 움찔하는 모션이 있음 그걸 방지하기 위해 지금 클릭한 순간이 멈춰야 할 시간임을 지정해주기 위해 this.startTime()을 써준다//
      }
    }
  }
})


const stage = document.querySelector('.stage');

stage.addEventListener('click',(e)=>{

  if(e.target.matches('.box')){
    gsap.to(e.target,{
      backgroundColor:'red',
      attr:{//setAttribute를 gsap에서 플로그인으로 쓸 수 있는 attr 라는게 있음. 내가 설정한 값을 넣어 줄 수 있음.//
        'data-stop':'stop',

      }
    })
  }
})
//matches는 대상과 즉, box를 가지고 있는지 매치가 되는지 확인하는 식으로 위힘을 줄 수 있음. 그리고 matches를 쓸때는 정확하게 클래스의 box를 가지고 있는지 물어봐야 하기 때문에 .을 붙여준다.//

