$(function () {
            
    // 팝업창이 열렸을 때, 부모창에 입력되었 던 닉네임을 가져온다.
    let parentNickname = opener.$(".username").val();
    console.log(parentNickname);
    $(".find_nickname_search").val(parentNickname);

    // 팝업창 확인버튼이 눌렸을 때, 부모창으로 닉네임값 전달
    $(".find_nickname_btn").on("click", function (){
        
        let e = $(".find_nickname_content input[name='nickname']:checked").val();
        // console.log(e);
        $(".username", opener.document).val(e);

        window.close();

    })
})