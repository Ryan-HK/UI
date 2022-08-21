// 한줄소개 자동으로 height 조정 스크립트
$(function (){
    $(".side_profil_comment").on('keyup', function(e){
        $(this).css({
            height: "auto"
        });
        $(this).height(this.scrollHeight);
    })
})

// 한줄소개 disable 및 submit 함수
$(function () {
    $("#btn_edit_comment").on({
        "click" : function () {
            if($(".side_profil_comment").is(":disabled")){
                $(".side_profil_comment").attr("disabled", false)
                .css({
                    boxShadow: "0px 0px 5px 1px rgb(20 167 255)"

                });

                $(".wrap_side_profil_comment span").text("한줄소개 수정");
            } else {
                
                $(".side_profil_comment").attr("disabled", true)

                .css({
                    boxShadow: "none"

                });

                $(".wrap_side_profil_comment span").text("한줄소개");
                // 한줄소개 submit (굳이 비동기 처리할 필요 없음)
                $(".wrap_side_profil_comment form").submit();
            }
        },
    })
}); 

// 닉네임 수정 버튼 눌렀을 시, 이벤트 핸들러
$(function () {
    $("#btn_edit_nickname").on({
        "click" : function () {
            if($(".side_profil_nickname").is(":disabled")){
                $(".side_profil_nickname").attr("disabled", false)
                .css({
                    boxShadow: "0px 0px 5px 1px rgb(20 167 255)"

                });

                $(".wrap_side_profil_nickname span").text("닉네임 수정");
            } else {
                // 닉네임 변경 submit
                // 중복 닉네임이 존재하는 지, 확인하는 조건문 필수
                // 꼭! 비동기 처리로 되어야 함.
                $(".side_profil_nickname").attr("disabled", true)

                .css({
                    boxShadow: "none"
                });

                $(".wrap_side_profil_nickname span").text("닉네임");

                $(".wrap_side_profil_nickname form").submit();
            }
        },
    })
}); 

// 닉네임 글자 수 제한 체크
// 제한 항목 : 공백금지 / 10자리 넘는 것 금지
// textarea에 글자가 입력될 때마다 발생되는 이벤트핸들러
$(function () {
    $(".side_profil_nickname").on({
        "keyup" : function () {
            
            let content = $(this).val();
            console.log(content);

            // textarea에 입력 된, 글자에 공백이 포함될 경우
            if(content.includes(" ")){
                alert("닉네임에 공백은 입력 불가합니다.");
                //teatarea에 입력 된 공백 제거
                let trimContent = content.trim();
                $(".side_profil_nickname").val(content.replace(" ", ""));
            }

            // textarea에 입력 된 글자 수가 10이 넘었을 경우, 오류창
            if(content.length > 10){
                alert("닉네임은 10자리까지만 지정 가능합니다.");
            }
        }
    })

})