
const limitTextarea = (e, id, limit) => {

	let _content = $(e).val();
	let _length = $(e).attr('maxlength')

	if(_length == null){
		_length = limit
	}

	if(id === null){

		let _textbox = $(e).parents('.textbox');


		if (_content.length == 0 || _content == '') {
			_textbox.find('.limit-txt').text('0');
		} else {
			if(_content.length > limit){
				_textbox.find('.limit-txt').text(limit);
			}else{
				_textbox.find('.limit-txt').text(_content.length);
			}

		}

	}else{
		// 글자수 세기
		if (_content.length == 0 || _content == '') {
			$('#'+id).text('0');
		} else {

			if(_content.length > limit){
				$('#'+id).text(limit);
			}else{
				$('#'+id).text(_content.length);
			}

		}
	}


}


const layerOpen = (layerName) => {
	$('article.layer.layer-'+layerName).show();
}

const layerClose = (layerName) => {
	$('article.layer.layer-'+layerName).hide();
}


<!-- 스크롤 탭 -->
$(window).on('scroll , reload',function (){

	if($('.home-nav-group').length <= 0){
		return
	}

	let sc = $(window).scrollTop();
	let startTarget = $('.home-nav-group .nav-view-box')
	let targetHeight = startTarget.innerHeight();
	let targetPosition = startTarget.offset().top + targetHeight;
	let menuWrap = $('.home-nav-group .nav-menu-box')
	let menuHeight = menuWrap.innerHeight()
	let header = $('header')
	let headerHeight = header.innerHeight();

	if(sc > (targetPosition - menuHeight - headerHeight)){
		menuWrap.addClass('fixed')
	}else{
		menuWrap.removeClass('fixed')
	}
})

const topMove = () => {
	$('html, body').animate({ scrollTop: 0 }, 'smooth');
}


const snbOpen = () => {
	$('aside.header-snb').addClass('active');
	$('body').css('overflow','hidden');
}

const snbClose = () => {
	$('aside.header-snb').removeClass('active');
	$('body').css('overflow','auto');
}

const snbDepth2Toggle = (e) => {
	$(e).toggleClass('active');
}