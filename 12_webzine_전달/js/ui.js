let isMobile = window.matchMedia("screen and (max-width: 1080px)").matches
// $(window).on('load , resize',function (){
// 	isMobile = window.matchMedia("screen and (max-width: 1160px)").matches
// })

/* header event */


let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {

	const currentScroll = window.scrollY;

	if(currentScroll > lastScroll && lastScroll > 0){
		document.querySelector('header').classList.add('is-scroll')
	}else{

		document.querySelector('header').classList.remove('is-scroll')

	}

	lastScroll = currentScroll;

})


const headerNavSubOpen = (nav) => {

	const navIdx = nav.getAttribute('data-nav');

	console.log(navIdx)

	document.querySelectorAll('.sub-nav').forEach(subNav => {
		subNav.classList.remove('is-active');
	})

	if(navIdx == null) return;

	document.querySelector(`.sub-nav[data-sub="${navIdx}"]`).classList.add('is-active');

}

document.querySelectorAll('.nav-list .nav-item').forEach(nav => {


	if(isMobile){

		nav.addEventListener('click', () => {
			console.log("HERE")
			headerNavSubOpen(nav)
		})

	}else{
		nav.addEventListener('mouseenter', () => {
			headerNavSubOpen(nav)
		})

	}

})



if ("ontouchstart" in document.documentElement) {
	
	document.body.addEventListener('click', function(event) {

		if (!event.target.closest('header')) {
			
			document.querySelectorAll('.sub-nav').forEach(subNav => {
				subNav.classList.remove('is-active');
			})
			
		}
	});


}else{
	document.querySelector('header .header-wrap').addEventListener('mouseleave', (event) => {

		document.querySelectorAll('.sub-nav').forEach(subNav => {
			subNav.classList.remove('is-active');
		})

	})
}

const headerLuckyClick = () => {

	const luckyBtn = document.querySelector('.floating-btn[data-floating=lucky]')

	luckyBtn.classList.toggle('is-active')

	if(luckyBtn.querySelector('.lucky-dot')){
		luckyBtn.querySelector('.lucky-dot').remove();
	}

}




/* footer */
const footerMoreToggle = (e) => {
	e.classList.toggle('active')
}

const floatingFooterMoreToggle = (e) => {
	e.classList.toggle('active')
}


const floatingFooterClose = (e) => {
	document.querySelector('aside.footer-floating .floating-wrap').classList.remove('is-active')

	document.querySelector('aside.footer-floating .select-btn').classList.remove('active')
}

const floatingFooterOpen = (e) => {
	document.querySelector('aside.footer-floating .floating-wrap').classList.add('is-active')
}







/* header sub */
const sub1Swiper = new Swiper('.swiper-sub1',{
	slidesPerView : 4,
	navigation : {
		prevEl : '.sub1 .swiper-button-prev',
		nextEl : '.sub1 .swiper-button-next',
	},
	spaceBetween : 20,
	observeParents: true,
	observe: true,

	breakpoints : {
		1080 : {
			spaceBetween : 40,
		}
	},

})

const sub2Swiper = new Swiper('.swiper-sub2',{
	slidesPerView : 4,
	navigation : {
		prevEl : '.sub2 .swiper-button-prev',
		nextEl : '.sub2 .swiper-button-next',
	},
	spaceBetween : 20,
	observeParents: true,
	observe: true,

	breakpoints : {
		1080 : {
			spaceBetween : 40,
		}
	},
})

const sub3Swiper = new Swiper('.swiper-sub3',{
	slidesPerView : 4,
	navigation : {
		prevEl : '.sub3 .swiper-button-prev',
		nextEl : '.sub3 .swiper-button-next',
	},
	spaceBetween : 20,
	observeParents: true,
	observe: true,

	breakpoints : {
		1080 : {
			spaceBetween : 40,
		}
	},
})

const sub4Swiper = new Swiper('.swiper-sub4',{
	slidesPerView : 4,
	navigation : {
		prevEl : '.sub4 .swiper-button-prev',
		nextEl : '.sub4 .swiper-button-next',
	},
	spaceBetween : 20,
	observeParents: true,
	observe: true,

	breakpoints : {
		1080 : {
			spaceBetween : 40,
		}
	},
})