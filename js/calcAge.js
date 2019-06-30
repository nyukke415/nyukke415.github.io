/* last updated:<2019/07/01/Mon 01:29:27 from:gale-ThinkPad-T480s> */

function calcAge() {
  const birthdate = new Date(1996, 4-1, 15);
  const today = new Date();
  var age = today.getFullYear() - birthdate.getFullYear();
  var age_m = today.getMonth() - birthdate.getMonth();
  var age_d = today.getDate() - birthdate.getDate();
  console.log(age, age_m, age_d);
  if(age_d < 0) {
    age_d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    age_m -= 1;
  }
  if(age_m < 0) {
    age_m += 12;
    age -= 1;
  }
  return age.toString()+" years "+age_m.toString()+" months "+age_d.toString()+" days";
}
