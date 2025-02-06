//
//
// // 함수 선언하고 호출하는 방법을 사용
// function buttonList(element) {
//     //button list 변수에 담기 getElementsByTagName 메서드를 써서 button 태그를 가지고 올 수 있지만 forEach를 돌리지 못함.
//     //const buttons = document.getElementsByTagName("button");
//     //buttonList 변수에 담기 querySelectorAll로 담아야 forEach,for 등을 사용할 수 있음.
//     const buttonList = document.querySelectorAll(".arr-btn");
//     console.log(buttonList)
//     const panels = document.querySelectorAll('[role="tabpanel"]');
//
//
//     buttonList.forEach(button => {
//         button.addEventListener('click', () => {
//           panels.forEach(panel =>{
//
//               console.log(panel.getAttribute('data-value'))
//               console.log(panel.dataset.value)
//
//               if(panel.getAttribute('aria-labelledby') === button.id){
//                 panel.classList.remove('is-hidden');
//               }else{
//                 panel.classList.add('is-hidden');
//               }
//           });
//
//             // const tabpanel = document.querySelector('[aria-labelledby="${buttonId}"]');
//             // console.log('tabpanel는')
//             // console.log(tabpanel)
//
//
//
//             // if(tabpanel == buttonId){
//             //     tabpanel.classList.remove('is-hidden');
//             //     console.log("true");
//             // }else {
//             //     tabpanel.classList.add('is-hidden');
//             //     console.log("false");
//             // };
//             //if문을 이용해서 buttonId값과 tabpanel 값이 일치하면 내용이 열리도록 하고 코드를 짜고 싶었는데, 같은 데이터 타입이 맞지 않아서 열리지 않음.
//
//
//
//
//             //
//             // document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
//             //     panel.classList.add('is-hidden');
//             // });
//             //
//             // const tabpanel = document.querySelector(`[role="tabpanel"][aria-labelledby="${buttonId}"]`);
//             // if(tabpanel){
//             //     tabpanel.classList.remove('is-hidden');
//             // }
//
//
//
//
//         });
//     });
// };
// buttonList();






// arrBtnList 즉시 실행함수 만들기
function arrBtnList() {
    const buttons = document.querySelectorAll('.arr-btn');
    const panels = document.querySelectorAll('[role="tabpanel"]');


    //buttons 변수에 담은 arr-btn를 forEach 돌려서 하나씩 꺼내오도록 함.
    buttons.forEach(button =>{
        //하나씩 꺼내온 button에다 addEventListener로 클릭 이벤트를 추가함.
        button.addEventListener('click' ,()=>{

            // 클릭 이벤트 시 panels 변수에 담은 tabpanel을 forEach 돌려서 하나씩 꺼내오도록 함.
            panels.forEach(panel =>{
                //하나씩 꺼낼 때 if문을 사용해서 panel에 있는 aria-labelledby 속성에 있는 값과 button.id 값과 일치하는지 확인 후
                // 맞으면 is-hidden을 빼고 틀리면 is-hidden을 추가함.
                if(panel.getAttribute('aria-labelledby') === button.id){
                    panel.classList.remove('is-hidden');
                }else {
                    panel.classList.add('is-hidden');
                }
            });
        });
    });
}
arrBtnList();














































