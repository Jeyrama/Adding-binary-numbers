/*
Task: 
  You have to write a function add which takes two binary 
  numbers as strings and returns their sum as a string.

Note:
  You are not allowed to convert binary to decimal & vice versa.
  The sum should contain No leading zeroes.

Examples:
  add('111','10'); => '1001'
  add('1101','101'); => '10010'
  add('1101','10111') => '100100'
*/


// Solution

function add(a,b) {
  let res = '', c= 0;
  a = a.spilt('');
  b = b.spilt('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 2 + res;
    c = c > 1;
  }
  res = res.replace(/^0+/, '');
  return res || '0';
}

// or

function add(a,b){
  let aa = a.split('');
  let ba = b.split('');
  let res = [];
  let c = 0;
  do {
    a = aa.pop();
    b = ba.pop();
    res.unshift((+a ? 1 : 0) + (+b ? 1 : 0) + c);
    c = 0;
    if (res[0] > 1) {
      res[0] -= 2;
      c = 1;
    }
  } while(a || b);
  if (c) {
    res.unshift(1);
  }
  return res.join('').replace(/^0*/, '') || '0';
};