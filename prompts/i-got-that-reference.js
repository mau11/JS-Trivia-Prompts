var num = 1336;
var name = 'Zach';
var obj1 = {val: 'foo'};
var obj2 = {val: 'bar'};
var obj3 = {val: 'baz'};

function alter(num, name, obj1, obj2) {
  num += 1;
  name = 'Beth';
  obj1 = obj3;
  obj2.val = 'qux';
}

alter(num, name, obj1, obj2);

console.log(num, name, obj1, obj2.val);

// What will the above log (and why)?
