





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
// const l = 8 * 13;
//
// for(let i = 0; i < l; i++){
//   let template = /* html */`
//     <div class="box"></div>
//   `
//   document.querySelector('.stage')?.insertAdjacentHTML('beforeend',template)
//
// }
//
//위에는 타이거를 움직이게 하는 코드//


const {chars,lines,words} = new SplitText('.word > div')

gsap.from(chars,{
  opacity:0,
  duration:2,
  stagger:{
    each:0.1,
    from:'random',
    ease:'power1', //점점 빠르게 나오는 해주는 가속도//
    onComplete(){
      gsap.to(this.targets()[0],{
        delay:0.5,
        duration: 2,
        color:'#51ff00'
      })
    },
  }
})










