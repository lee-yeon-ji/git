






const l = 8 * 13;

for(let i = 0; i < l; i++){
  let template = /* html */`
    <div class="box" data-index="${i}"></div>
  `
  document.querySelector('.stage')?.insertAdjacentHTML('beforeend',template)

}

gsap.to('.box',{
  duration:1,
  scale:0.2,
  repeat:-1,
  yoyo:true,
  ease:'power1.inOut',
  stagger:{
    each:0.1,
    grid:[8,13], //작은 네모들이 한줄씩 애니메이션이 작동하는게 아니라 하나의 그리드로 묶어서 작동하는 것. [num,num]처럼 행과열을 찍어도 되고, auto라고 적어도됨. 또 커스텀해서 [8,10] 이런식으로 움직이는 행과 열을 조절할 수 있음.
    // axis:'x',//축을 줄 수도 있음.
    repeat:-1,
    yoyo:true,
    from:'center',
  }
})



// gsap.to('.tiger > div',{
//   y:100,
//   repeat:-1,
//   yoyo:true,
//
//   stagger:{
//     each:0.5,
//     // repeat:-1,
//     // yoyo:true, //stagger 안에서 주는 repeat과 yoyo의 속성이 다른 이유 stagger에서는 각 대상별로 반복설정을 주는 것이고 twin에서는 전체로 주기 때문에 차이가 있음.
//   }
// })
//









