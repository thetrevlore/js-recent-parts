// function data() {
//   return [1,2,3,4,5];
// }

// var tmp = data();
// var first = tmp[0];
// var second = tmp[1];
// var third = tmp[2];

// var [
//   first,
//   second = 10, // defaults. only applies if the element at this position is strictly undefined. If it is null, null will be used rather than 10.
//   third
// ] = data();


// function data() {
//   return [1,2,3,4,5];
// }

// var tmp = data();
// var first = tmp[0];
// var second = tmp[1];
// var third = tmp[2];
// var fourth = tmp.slice(3);

// var tmp;
// var [
//   first,
//   second,
//   third,
//   ...fourth // gathers up the rest of the values. spread operator has to be last defined.
// ] = tmp = data(); // tmp would be equal to the entire array returned from data();




// function data() {
//   return [1,2,3,4,5];
// }

// var tmp = data();
// var first = tmp[0];
// var second = tmp[1];
// var third = tmp[2];
// var fourth = tmp.slice(3);

// var tmp;
// var o = {};
// [
//   o.first,
//   o.second,
//   o.third,
//   ...o.fourth
// ] = tmp = data();

// console.log(o)



// function data() {
//   return [1,2,3,4,5];
// }

// var tmp = data();
// var first = tmp[0];
// var second = tmp[1];
// var third = tmp[2];
// var fourth = tmp.slice(3);

// var tmp;
// var a = [];
// [
//   a[3],
//   a[10],
//   a[42],
//   ...a[100]
// ] = tmp = data();

// console.log(a)


// function data() {
//   return [1,2,3,4,5];
// }

// var tmp = data();
// var first = tmp[0];
// var second = tmp[1];
// var third = tmp[2];

// var [
//   first,
//   ,
//   third
// ] = data();

// console.log(first, third)


// swap *************
// var x = 10;
// var y = 20;
// {
//   let tmp = x;
//   x = y;
//   y = tmp;
// }

// var x = 10;
// var y = 20;
// [y,x] = [x,y];
// swap *************


// function data(tmp = []) { // default value
//   var [
//     first,
//     second,
//     third
//   ] = tmp;
//   // ...
// }
// function data([
//   first,
//   second,
//   third
// ] = []) { // default value
//   console.log(first)
//   console.log(second)
//   console.log(third)
//   console.log(arguments)
// }

// data()




// function data() {
//   return [1,[2,3],4];
// }

// // var tmp = data() || [];
// // var first = tmp[0];
// // var tmp2 = tmp[1];
// // var second = tmp2[0];
// // var third = tmp2[1];
// // var fourth = tmp[2];

// var tmp;
// var [
//   first,
//   [
//     second,
//     third
//   ],
//   fourth
// ] = tmp = data() || [];
// // if that inner array was potentially undefined like [1,undefined,4] and you don't want it to throw an error in that case,
// // then...
// var tmp;
// var [
//   first,
//   [
//     second,
//     third
//   ] = [], // *
//   fourth
// ] = tmp = data() || [];





// **********OBJECT DESTRUCTURING**************

// function data() {
//   return { a: 1, b: 2, c: 3 };
// }

// var tmp = data();
// var first = tmp.a;
// var second = tmp.b;
// var third = tmp.c;

// var {
//   b: second, // position doesn't matter with objects. unlike arrays.
//   a: first = 42, // default value of 42 if a is undefined.
//   ...third // whole separate object that collects the rest of the keys/values.
// } = data();


// if the variable names have already been declared... wrap the whole destructuring statement in ();
// function data() {
//   return { a: 1, b: 2, c: 3 };
// }

// var first;
// var second;
// var third;
// ({
//   b: second,
//   a: first,
//   ...third
// } = data());
// // OR
// var tmp;
// tmp = {
//   b: second,
//   a: first,
//   ...third
// } = data();





// function data() {
//   // return { b: 2, c: 3, d: 4 };
//   return;
// }

// var first, second;

// var {
//   b: second,
//   a: first
// } = data() || {}; // avoids error of data() not returning an object.

// //if source and target are the same name (if you want to use the key to name the variable holding the value.)
// var {
//   a,
//   b
// } = data() || {};




// function data() {
//   return {
//     a: 1,
//     b: {
//       c: 3,
//       d: 4
//     }
//   };
// }

// // var tmp = data() || {};
// // var a = tmp.a;
// // var b = tmp.b;
// // var c = b.c;
// // var d = b.d;

// var {
//   a,
//   b: {
//     c,
//     d
//   }
// } = data() || {};

// console.log(a)
// console.log(c)
// console.log(d)



// function data(tmp = {}) {
//   var {
//     a,
//     b
//   } = tmp;
//   // ...
// }
// // equivalent
// function data({
//   a,
//   b
// } = {}) {
//   // ...
// }


// you can use the property off the object multiple times.
// Below I assign 'b' to 'b', but I also assign 'b.x' to 'w'
// var obj = {
//   a: 1,
//   b: {
//     x: 2
//   },
//   c: 3
// };

// var {
//   a,
//   b: b,
//   b: {
//     x: w
//   },
//   c
// } = obj;

// console.log(a, b, w, c)