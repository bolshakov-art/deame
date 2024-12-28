const array = ['a', 'b', 'c'];
const result = array.map((element, index) => {
  return `${element}-${index}`;
});
console.log(result); // ["a-0", "b-1", "c-2"]
