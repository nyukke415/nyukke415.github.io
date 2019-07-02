/* last updated:<2019/07/02/Tue 21:09:02 from:gale-ThinkPad-T480s> */

function calcAge() {
  const birthdate = new Date(1996, 4-1, 15);
  const today = new Date();
  var age = today.getFullYear() - birthdate.getFullYear();
  var age_m = today.getMonth() - birthdate.getMonth();
  var age_d = today.getDate() - birthdate.getDate();
  if(age_d < 0) {
    age_d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    age_m -= 1;
  }
  if(age_m < 0) {
    age_m += 12;
    age -= 1;
  }
  $("#age").html(age.toString());
  $("#age_m").html(age_m.toString());
  $("#age_d").html(age_d.toString());
}

$(function() {
  calcAge();
});
