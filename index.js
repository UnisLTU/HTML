let object1 = {
  name: "Bingeh",
  age: 18,
  func: addNumbers,
  //   otherFunc: otherAddNumbers,
};

let object2 = object1;

object2.age = 30; //ref
object2.name = "Ugnius"; //ref

console.log(object1);

console.log(object1.func(1, 2, object1.age));

// console.log(object1.otherFunc(1, 2, object2.age));

//hoisting does not work on arrow functions. Also does not work on let, const
// const otherAddNumbers = (a, b, age) => {
//   return a + b + age;
// };

//hoisting works/function addNumbers move to top. Also works on var
function addNumbers(a, b, age) {
  return a + b + age;
}
