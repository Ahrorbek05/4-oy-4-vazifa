// 1-masala
// let t = +prompt('Poyezdning ketish vaqti');
// t >= 0 && t <= 23;
// let T = +prompt('Kech qolgan vaqti');
// T ( 1 <= T && T >= 1000 );
// let ketish_vaqti;
// ketish_vaqti = (t + (T % 24)) % 24;
// console.log(ketish_vaqti);

// 2-masala
let C = +prompt('gradusni selsiy shkalasida kiriting');
let s;
let f;
s = C + 273.15;
f = C * 1.80 + 32.00;
console.log(s);
console.log(f);

// 3-masala
// let a = +prompt('a kiritilsin');
// let b = +prompt('b kiritilsin');
// let p;
// let s;
// p = 2 * ( a + b );
// s = a * b ;
// if ( p > s ){
//     console.log('perimetri');
// } else {
//     console.log('yuzasi');
// }

// 4-masala
// let N = +prompt("Tarvuzning kilosi");
// let A = +prompt("Tarvuzdagi dastlabki suvning miqdori");
// let B = +prompt("Tasvuzdagi suvning vaqt otkandagi miqdori");
// let T_S_O;
// let result;
// T_S_O = (N - (N*A)/100);
// result = T_S_O + (N * B)/100;
// console.log(result);


// 5-masala
// let N = +prompt("N ni kiriting");
// N >= 3; N >= 100
// let B = N * (N-2); 
// console.log(B);

// 6-masala
// function vaqtniTekshirish(t) {
//     if (t < 0) {
//       console.log("vaqt salbiy bolishi mumkin emas.");
//     } else if (t === 0) {
//       console.log("Vaqt o'tmagan.");
//     } else if (t > 0 && t <= 30) {
//       console.log("Qisqa vaqt o'tdi.");
//     } else if (t > 30 && t <= 60) {
//       console.log("Taxminan bir soat o'tdi.");
//     } else {
//       console.log("Bir soatdan ko'proq vaqt o'tdi.");
//     }
//   }

// 7-masala
// let B = +prompt("B");
// let S =  +prompt("S");
// let Y = (B-S);
// let H = (Y/2)
// console.log(H);

// 8-masala
// let T = +prompt("Kinoning davomiyligi");
// let A = +prompt("Video 1 sekuntining hajmi");
// let B = +prompt('Video tortish tezligining sekuntiga miqdori');
// let U_H;
// let T_V;
// let K_V;
// let M_K_V;
// U_H = T * A;
// T_V = U_H / B;
// K_V = A / B;
// M_K_V = T_V - K_V;

// console.log(M_K_V);

// 9-masala
// let V = +prompt("V");
// let A =  +prompt("A");
// let B =  +prompt("B");
// let G = (B-V);
// let K = (A-V);
// console.log(G);
// console.log(K);

// 10-masala
// let rector = +prompt('rector ni kiriting.');
// let tester = +prompt('tester ni kiriting.');
// let result;
// result = rector + tester / 2;
// console.log(result);
