/* last updated:<2019/07/02/Tue 20:32:56 from:gale-ThinkPad-T480s> */

function sideMenu() {
  var sideMenu = $("#sideMenu")
  var internalLink = `
<div class="sideh">Internal Link</div>
<a href="index.html" class="button noSel sidec">Home</a>
`
  var jump = `
<div class="sideh">Jump</div>
<a href="#top" class="button noSel sidec jump active">TOP</a>
`
  $('h1').each(function(){
    var text = this.innerHTML
    jump += `<a href="#`+text+`" class="button noSel sidec jump">`
      +text+`</a>`
    $(this).attr("id", text);
  });

  sideMenu.html(internalLink + jump)
}

$(function() {
  sideMenu();
  highlightJumpList();
});


// 現在のスクロール位置に対応した jumpList を強調
function highlightJumpList() {
  var list = [0];
  var sidec = [$('h0')];
  $('h1').each(function() {
    list.push($(this).get(0).offsetTop  - 15);
  });
  $('.jump').each(function() {
    sidec.push($(this));
  });

  $(window).scroll(function() {
    $('.jump').each(function() {
      $(this).removeClass('active');
    });
    for(var i = 0; i < list.length; i++) {
      if(list[i] > $(window).scrollTop()) {
        sidec[i].addClass('active');
        break;
      }
    }
  })
}
