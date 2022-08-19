// 메인페이지 - 섹션 - 배너 부 / 카드섹션 

$( () => {
    $('.wrap_banner_img').slick({
        slide: 'div', 		        //슬라이드 되어야 할 태그
        infinite : true, 	
        // dots : true,        //무한 반복 옵션	 
        slidesToShow : 1,		    // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		    //스크롤 한번에 움직일 컨텐츠 개수
        speed : 500,	            // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        prevArrow : "<span class='left_butten1'><i class='fas fa-chevron-left'></i></span>",		// 이전 화살표 모양 설정
        nextArrow : "<span class='right_butten1'><i class='fas fa-chevron-right'></i></span>",		// 다음 화살표 모양 설정
    });
})   

$( () => {
    $('.wrap_group_inner').slick({
        slide: 'div', 		        //슬라이드 되어야 할 태그
        infinite : true, 	
        dots : true,        //무한 반복 옵션	 
        slidesToShow : 4,		    // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 4,		    //스크롤 한번에 움직일 컨텐츠 개수
        speed : 500,	            // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 8000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        prevArrow : "<span class='left_butten'><i class='fa-solid fa-circle-chevron-left'></i></span>",		// 이전 화살표 모양 설정
        nextArrow : "<span class='right_butten'><i class='fa-solid fa-circle-chevron-right'></i></span>",		// 다음 화살표 모양 설정
    });
}) 