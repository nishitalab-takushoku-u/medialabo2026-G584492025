function greeting() {
let x = document.querySelector('input[name="left"]');
let x2 = x.value;
let a = Number(x2);
let y = document.querySelector('input[name="right"]');
let y2 = y.value;
let b = Number(y2);
let keisan;
keisan = Number(a+b);
let p = document.querySelector('span#answer');
p.textContent = keisan;
}
let z = document.querySelector('button#calc');

z.addEventListener('click',greeting);