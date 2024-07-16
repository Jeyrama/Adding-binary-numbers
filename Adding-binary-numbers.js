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