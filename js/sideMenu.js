/* last updated:<2019/06/21/Fri 23:40:58 from:gale-ThinkPad-T480s> */

function sideMenu() {
  var sideMenu = $("#sideMenu")
  var internalLink = `
<div class="sideh">Internal Link</div>
<a href="index.html" class="button noSel sidec">Home</a>
`
  var jump = `
<div class="sideh">Jump</div>
<a href="#top" class="button noSel sidec">TOP</a>
`
  $('h1').each(function(){
    var text = this.innerHTML
    jump += `<a href="#`+text+`" class="button noSel sidec">`
      +text+`</a>`
    $(this).attr("id", text);
  });

  sideMenu.html(internalLink + jump)
}

$(function() {
  sideMenu();
});
