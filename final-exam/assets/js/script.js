function onClickCheck() {
  var arr = $('.stepckbox')
    .map(function () {
      return this.checked;
    })
    .get();

  var pageURL = $(location).attr('href').split('/');
  var page = pageURL[5];

  localStorage.setItem('v4-page-' + page + '-checked', JSON.stringify(arr));
}

$(document).ready(function () {
  console.log('ready!');
  var pageURL = $(location).attr('href').split('/');
  var page = pageURL[5];
  var arr =
    JSON.parse(localStorage.getItem('v4-page-' + page + '-checked')) || [];

  arr.forEach(function (checked, i) {
    $('.stepckbox').eq(i).prop('checked', checked);
  });

  $('.stepckbox').click(onClickCheck);
});
