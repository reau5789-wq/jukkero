// 카카오 지도 JavaScript 키를 아래 따옴표 안에 넣으면
// 지도가 카카오맵으로 바뀌고 교회가 실제 주소 위치에 표시됩니다.
// (developers.kakao.com → 내 애플리케이션 → 앱 키 → JavaScript 키)
window.KAKAO_KEY="f2de13038fa11ad56fe4d2176e21ce37";

// 앱 안 '보내기' 버튼이 보내는 곳 (FormSubmit).
// 처음 한 번 보내면 운영자 메일로 '활성화(Activate Form)' 메일이 옵니다. 그 메일의 버튼을 눌러야 이후 신청이 전달됩니다.
// 활성화 메일에 나오는 무작위 주소(영문·숫자)를 아래 메일 주소 자리에 넣으면, 코드에서도 메일 주소가 보이지 않습니다.
window.FORM_ENDPOINT="https://formsubmit.co/ajax/reau5789@daum.net";

// 운영자 자동 처리기 (Google Apps Script 웹 앱 주소, https://script.google.com/macros/s/…/exec).
// 넣으면 등록 신청·수정 요청·이단 신고가 처리기로 가서 저장되고, 운영자는 메일의 [검토하기]에서 '승인'만 누르면 됩니다.
// 비워 두면 예전처럼 위 FormSubmit 메일로만 갑니다.
window.ADMIN_ENDPOINT="https://script.google.com/macros/s/AKfycbxh3O9BrCfBXitdGMORUyjYrAzbRKS4BoxO9ZKQeM0p1otjojMrNtfmL1KOiQO0mCD9Mw/exec";
