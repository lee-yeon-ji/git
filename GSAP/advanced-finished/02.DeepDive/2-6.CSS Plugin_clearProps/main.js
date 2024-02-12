

const $ = node => document.querySelector(node);




// const boxes = document.querySelectorAll('.box');
// const boxArray = Array.prototype.slice.call(boxes);
const boxes = gsap.utils.toArray('.box');

boxes.forEach((item)=>{
  
  item.addEventListener('click',(e)=>{
    gsap.to(e.currentTarget,{
      backgroundColor:'gray',
      width:'300px',
      x:200,
      scale:0.3,
   
    })
  })
})


$('#reset').addEventListener('click',()=>{
  gsap.set('.box',{clearProps:'all'})
})
    // cllearProps는 이전으로 되돌아가게하는 플로그인으로 ''안에 초기화 하고싶은 속성을 적어주면 됨. 이벤트를 추가해 줄 때 이벤트가 인라인으로 들어가는데 이때 cllearProps 플로그인을 이용해 이벤트를 추가하기 전으로 되돌아가게 함.



