

const $ = node => document.querySelector(node);




const boxes = gsap.utils.toArray('.box');
console.log(boxes)
//유사배열로 나오기 때문에 일반적인 배열의 능력을  사용할 수 없음.
boxes.forEach((item)=>{

    item.addEventListener('click',(e)=>
    {
        gsap.to(e.currentTarget,{
            backgroundColor:'gray',
            width:'300px'

        })
    })
})
//gsap에 제공해주는 기능으로 한번에 DOM을 잡아주는 utils 함수의 toArray를 해야함.