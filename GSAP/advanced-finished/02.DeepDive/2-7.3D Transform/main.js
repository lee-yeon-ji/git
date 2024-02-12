






gsap.set('.box',{transformPerspective:600}) //원근감을 주기 위해 stage,box에게 주지 말고  gsap으로 적용해서 균일하게 줄 줄 수 있음. 그러므로 부모에게 주느냐 자식에게 주느냐에 따라 소실점이 달라지니까 어떤 애니메이션효과를 줄 것 인지 확인필요.

gsap.to('.box',{
  rotationY:360,
  duration:8,
  ease:'none',
  transformOrigin:'50% 50% 400'
})



GSDevTools.create() // 밑에 gsap DevTools을 넣어서 밑에 재생바가 생기도록 함.