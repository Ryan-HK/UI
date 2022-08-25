

// 체크박스 전체선택하기 (문의)
function selectAll_qna(selectAll)  {
	const checkboxes = document.getElementsByName('qna-check');
	
	checkboxes.forEach((checkbox) => {
		checkbox.checked = selectAll.checked;
	})
}

// 체크박스 전체선택하기 (신고)
function selectAll_report(selectAll)  {
	const checkboxes = document.getElementsByName('report-check');
	
	checkboxes.forEach((checkbox) => {
		checkbox.checked = selectAll.checked;
	})
}
