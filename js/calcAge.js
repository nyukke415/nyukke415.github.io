/* last updated:<2019/06/30/Sun 23:48:41 from:gale-ThinkPad-T480s> */

function calcAge() {
  const birthday = new Date(1996, 4-1, 15);
  const today = new Date();
  var age = today.getFullYear() - birthday.getFullYear();
  var age_m = today.getMonth() - birthday.getMonth();
  var age_d = today.getDate() - birthday.getDate();
  if(age_d < 0) {
    age_d = -1 + new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if(age_m < 0) {
    age_m += 12;
    age -= 1;
  }
  return age.toString()+" years "+age_m.toString()+" months "+age_d.toString()+" days";
}
