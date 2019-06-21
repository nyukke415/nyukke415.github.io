/* last updated:<2019/06/21/Fri 23:41:05 from:gale-ThinkPad-T480s> */

function calcAge() {
  const birthday = new Date(1996, 4-1, 15);
  const today = new Date();
  var age = today.getFullYear() - birthday.getFullYear();
  var age_m = today.getMonth() - birthday.getMonth();
  var age_d = today.getDate() - birthday.getDate();
  console.log(age, age_m, age_d);
  if(age_d < 0) {
    age_d = -1 + new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if(age_m < 0) {
    age_m += 12;
    age -= 1;
  }
  return age.toString()+"歳"+age_m.toString()+"ヶ月"+age_d.toString()+"日";
}

$(function() {
  $("#age").html(calcAge());
});
