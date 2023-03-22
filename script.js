// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

let tabButton = $('.tab-button');
let tabContnt = $('.tab-content');

$('.list').click(function(e) {
  openTab(e.target.dataset.id)
});

function openTab(index) {
  tabButton.removeClass('orange');
  tabButton.eq(index).addClass('orange');

  tabContnt.removeClass('show');
  tabContnt.eq(index).addClass('show');
}