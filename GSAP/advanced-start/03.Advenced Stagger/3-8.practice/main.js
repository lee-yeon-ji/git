
const $ = node => document.querySelector(node);

const planet = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
  'pluto'
]




// map  -> 배열의 능력 (새로운 배열을 반환)
// forEach -> 배열의 능력 (값을 반환하지 x)
// insertAdjacentHTML (dom 뿌려주는)


const todo = [
  '밥',
  '일',
  '게임',
  '코딩'
    ]



const list = todo.map((item,index)=>{
  return `<div class="${index}">${item}</div>`
}) //map의 형식//


list.forEach((item,index)=>{
  console.log(item,index);
})



