$(function () {
var $body = $('body');

//開閉用ボタンをクリックでクラスの切替え
$('#menu__btn').on('click', function (e) {
  $body.addClass('open');
  //いつかtoggleするようにする
});

// メニュー名以外の部分をクリックで閉じる
$('#menu__nav').on('click', function () {
  $body.removeClass('open');
});
});
