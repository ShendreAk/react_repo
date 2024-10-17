let count = 0;
function counter() {
  count++;
  console.log(count);
}
let pvalues = document.getElementById('values');
let text = document.getElementById('text');
const write = (event) => {
  console.log(event.target.value);
  pvalues.textContent = event.target.value;
}
text.addEventListener('input', write)


// counter();
// console.log(`*****`);
// console.log(count);
// console.log(`*****`);
// counter();
// console.log(`*****`);
// console.log(count);
// console.log(`*****`);
// counter();
// console.log(`*****`);
// console.log(count);
// console.log(`*****`);
// counter();
// console.log(`*****`);
// console.log(count);
// console.log(`*****`);
// counter();
// console.log(`*****`);
// console.log(count);
// console.log(`*****`);
// counter();
// console.log(`*****`);
// console.log(count);