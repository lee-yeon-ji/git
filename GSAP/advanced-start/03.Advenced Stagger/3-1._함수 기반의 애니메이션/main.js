//
//
// //따로 함수로 빼서 작성하기
// //이렇게 작성하는게 함수 기반의 값(함수 중심의 값)
// function custom (i,t,arr){
//
//     // if( i % 2 !== 0){
//     //     return 100
//     // }
//
//
//     if(t.classList.contains('orange')){
//         return 0
//     }
//
//     return i * 30
//
// }
//
//
//
// gsap.to('.box',{
//     // y: (index,target,arr) => {
//     //     console.log(index);
//     //     i는 index로 순서를 나타내고, t는 target으로 어떤 대상인지, 그리고 마지막 a은 arr로 배열을 나타냄. 이것들은 gsap에서 제공하는 것임.
//     //     return 30
//     // },
//     //
//     // y:(i,t,arr ) => {
//     //     if(i % 2 == 0){
//     //         return 100
//     //     } 만약 i가 2를 나누었을 때 0이라면 100만큼 밀기 근데 짝수가 왜 안내려 가는 이유는?  0부터 시작하기 때문 만약에 짝수를 내려가게 하려면 !를 주어서 반대로 실행할 수 있도록 함.
//     //     if(i > 5) return 0
//     //     return i * 30
//     //         만약 i가 5보다 큰 애들은 return값을 0으로 움직이게 하지마 그대신 다른 애들은 i에 30만 큼 콥해줘
//     //     return 30
//     // },
//     y:custom,
//     x:custom,
//     rotation:(i,t)=>{
//         if(t.classList.contains('orange')){
//             return 0
//         }
//
//         return 360
//     },
//     stagger:0.1 //stagger는 시간 간격에 따라서 각 요소가 움직이는 것.
// });
//
//


gsap.to('.blue,.pink',{
     rotation:(i,t)=> {
         if(t.classList.contains('pink')){
             return -360
         }
         return 360
     }, //회전 각
     repeat:-1, //무한루프로 돌아가게 하는
     duration:(i,t) => {
         if(t.classList.contains('pink')){
             return 0.5
         }
         return 1
     },//회전속도
     ease:'none', //seae 값을 none으로 주면 멈추지 않고 계속 돌아가게 함.
    stagger:0.1
})











