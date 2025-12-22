const nums = [1, 2, 3, 4, 5];
console.log(nums);


// 1.Map
const doubleNum = nums.map((num) => 2 * num);
console.log(doubleNum);


//2.filter

const evens = nums.filter((nums) => nums % 2 === 0);
console.log(evens);

//3.reduce 
const sum = nums.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum);