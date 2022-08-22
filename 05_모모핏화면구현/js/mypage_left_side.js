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
                // 한줄소개 확인 confirm창
                alterConfirmComment("한줄소개를 바꾸시겠습니까?");
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
                alertConfirmNickName();
            }
        },
    })
}); 

// 닉네임 글자 수 제한 체크
// 제한 항목 : 공백금지 (n자리 넘는 것 금지)
// textarea에 글자가 입력될 때마다 발생되는 이벤트핸들러
$(function () {
    $(".side_profil_nickname").on({
        "keyup" : function () {
            
            let content = $(this).val();
            // console.log(content);

            // textarea에 입력 된, 글자에 공백이 포함될 경우
            if(content.includes(" ")){
                alertError('닉네임에 공백은 입력 불가합니다');
                //teatarea에 입력 된 공백 제거
                var spaceRegex = /\s/gi;
                let trimContent = content.replace(spaceRegex, "");
                $(".side_profil_nickname").val(trimContent);
            }

            // textarea에 입력 된 글자 수가 10이 넘었을 경우, 오류창
            if(content.length > 10){
                alertError("닉네임은 10자리까지만 지정 가능합니다.");
            }
        }
    })

})

// sweetalter2 Error Alert 함수
function alertError(e) {
    Swal.fire({
        icon: 'error',
        title: `<p class="font-16-500">${e}</p>`,

        customClass : {
            confirmButton: 'swal2-confirm-btn'
        }
    })
}

// sweetalter2 Success Alert 함수
function alertSuccess(e) {
    Swal.fire({
        icon: 'success',
        title: `<p class="font-16-500">${e}</p>`,

        customClass : {
            confirmButton: 'swal2-confirm-btn'
        }
    })
}

// sweetalter2 Confirm Alert 닉네임 함수 
// 닉네임 중복체크에 대한 비동기 처리 필수
function alertConfirmNickName() {
    let nickname = $(".side_profil_nickname").val();

    Swal.fire({
        title: `<p class="font-16-500">닉네임을 "${nickname}" 으로 바꾸시겠습니까?</p>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '확인',
        cancelButtonText: '취소',

        customClass : {
            confirmButton: 'swal2-confirm-btn',
            cancelButton: 'swal2-cancel-btn'
        }
    }).then((result) => {
        
        if(result.isConfirmed){

            // 닉네임 변경 submit
            // ----------------------------------------------------
            // 중복 넥네임 DB확인하는 코드입력란 : 비동기 처리 필수
            // ----------------------------------------------------
            $(".side_profil_nickname").attr("disabled", true)

            .css({
                boxShadow: "none"
            });
            $(".wrap_side_profil_nickname span").text("닉네임");

            $(".wrap_side_profil_nickname form").submit();
            // 한줄소개 submit (닉네임이 잘 등록 되었는 지, 비동기처리 상황봐서 입력)
            alertSuccess(`닉네임이 "${nickname}" 으로 변경되었습니다.`); 
        }

    })
}

// sweetalter2 Confirm Alert 한줄소개 함수 
function alterConfirmComment() {
    Swal.fire({
        title: `<p class="font-16-500">한줄소개를 바꾸시겠습니까?</p>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '확인',
        cancelButtonText: '취소',

        customClass : {
            confirmButton: 'swal2-confirm-btn',
            cancelButton: 'swal2-cancel-btn'
        }
    }).then((result) => {
        
        if(result.isConfirmed){

            // 한줄소개 변경 submit
            $(".side_profil_comment").attr("disabled", true)

            .css({
                boxShadow: "none"
            });

            $(".wrap_side_profil_comment span").text("한줄소개");
            $(".wrap_side_profil_comment form").submit();
            // 한줄소개 submit (한줄 소개가 잘 등록 되었는 지, 비동기처리 상황봐서 입력)
            alertSuccess("한줄소개가 변경되었습니다.");
        }

    })
}