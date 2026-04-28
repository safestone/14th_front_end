const R = Number(prompt("반지름을 입력해주세요!"));
const PI = 3.14;
const A = PI*R*R;
alert(A)

let foods = ["치즈", "요구르트", "우유", "연유"];
foods.push("아이스크림");
console.log(foods);

let foods = ["치즈", "요구르트", "우유", "연유", "아이스크림"];
foods.splice(2,0,"빵");
console.log(foods);

const num = Number(prompt('숫자를 입력하세요'));
if (num>0) {
    console.log("양수");
}else if (num==0) {
    console.log("0");
}else {
    console.log("음수");
}

const num = Number(prompt('숫자를 입력하세요'));
if (num%2 === 0) {
    console.log("짝수");
}else {
    console.log("홀수");
}

let nums = 0;
for (let i=1; i<=10; i++) {
    nums += i;
}
console.log(nums);

for (let i=1 ; i<=5 ; i++) {
    let star = "";

    for (let j=1; j<=i; j++) {
        star += "*";
    }

    console.log(star);
}

let a = Number(prompt('a를 입력해주세요'));
let b = Number(prompt('b를 입력해주세요'));
function sum(a,b) {
    let num = 0;
    for(let i=a; i<=b; i++) {
        num = num + i;
    }
    console.log(num);
}
sum(a,b);

console.log(student.name);
console.log(student.isGraduated);
console.log(student.subjects[1]);
console.log(student.address.city);

홍길동은(는) 20세이고, 서울에 살고 있습니다.

const greeting = (name) => {
    console.log("김미미");
};