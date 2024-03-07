





// repeat:-1으로 무한반복 일때는 onComplete를 사용해서 완료콜백을 사용할 수 없다. 끝나지 않고 무한 반복이니까
//




gsap.to('.tiger> div',{
  y:100,

  stagger:{
    each:0.2,
    repeat:1,
    yoyo:true,
    onComplete(){
      gsap.to(this.targets()[0],{
        rotation:360
      })
    }
  }
})





















const l = 8 * 13;

for(let i = 0; i < l; i++){
  let template = /* html */`
    <div class="box"></div>
  `
  document.querySelector('.stage')?.insertAdjacentHTML('beforeend',template)

}



















