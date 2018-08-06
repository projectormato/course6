$(function () {
var $body = $('body');

//開閉用ボタンをクリックでクラスの切替え
$('#menu__btn').on('click', function (e) {
  $body.addClass('open');
  console.log("btn click!");
  //いつかtoggleするようにする
});

// メニュー名以外の部分をクリックで閉じる
$('#menu__nav').on('click', function () {
  $body.removeClass('open');
  console.log("menu click!");
});
});
