/* last updated:<2020/03/02/Mon 18:37:09 from:gale-ThinkPad-T480s> */

function sideMenu() {
  var sideMenu = $("#sideMenu")
  var pages = `
<div class="sideh">Pages</div>
<a href="index.html" class="button noSel sidec">Home</a>
`
  // <a href="note.html" class="button noSel sidec">Note</a>

  var jump = `
<div class="sideh">Jump</div>
<a href="#top" class="button noSel sidec jump active">TOP</a>
`
  $('h1').each(function(){
    var text = this.innerHTML
    var text_ns = text.replace(" ", "");
    jump += `<a href="#`+text_ns+`" class="button noSel sidec jump">`
      +text+`</a>`
    $(this).attr("id", text_ns);
  });

  sideMenu.html(pages + jump)
}

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

// スムーズスクロール（履歴に残らない）
function setSmoothScroll() {
  $('a[href^="#"]').on('click', function() {
    var speed = 200; // ms
    var href= $(this).attr("href");
    if(href == "#top") {
      var position = 0;
    } else {
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.get(0).offsetTop - 15;
    }
    $("html, body").animate({scrollTop:position}, speed, 'swing');
    return false;
  });
}


$(function() {
  sideMenu();
  highlightJumpList();
  setSmoothScroll();
});
