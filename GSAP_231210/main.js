




let base = document.querySelector('.capsule-box')


base.addEventListener('click',()=>{
    var capsule = gsap.timeline()
        .to('.capsule-box',{duration:0.2,scale:0.75})
        .to('.type_cover',{delay:1,duration:0.1,y:-70,scale:1.5})
        .to('.type_front',{duration:0.1,y:70,scale:1.5},'<')

})