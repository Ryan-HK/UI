
// 보낸쪽지함/받은쪽지함 다르게 보이게하기 
$("#mypage_save_message").change(function() {
let mypage_save_message = $("#mypage_save_message option:selected").val();
if (mypage_save_message == "send") {
	$(".mypage-send-table").show()
	$(".mypage-receive-table").hide()
} else {
	$(".mypage-send-table").hide()
	$(".mypage-receive-table").show()
}
});

// 체크박스 전체선택하기 
function selectAll(selectAll)  {
	const checkboxes = document.getElementsByName('mesaage-check');
	
	checkboxes.forEach((checkbox) => {
		checkbox.checked = selectAll.checked;
	})
}
