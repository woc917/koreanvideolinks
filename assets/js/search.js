$(document).ready(function(){

  var content = $('.version');

  $("#keyword").keyup(function(){

      var k = $(this).val();
      content.parent().hide();
      var temp = $("h5:contains('" + k + "')");
      temp.parents('div').show();
  })

    // 원인 발견! hide() 시킨 그 태그를 정확히 선택해서 다시 보이기 해야 함.

});
