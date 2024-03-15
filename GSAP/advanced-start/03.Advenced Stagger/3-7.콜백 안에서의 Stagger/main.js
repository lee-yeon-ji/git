





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


gsap.to('.box',{
  scale:0.3,

  stagger:{
    each0:0.5,
    onStart(){
      console.log('start');
    }
  }
})




