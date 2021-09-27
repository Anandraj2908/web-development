/* <This is type 1> 
const add =(x,y) => x+y;
const PI =3.14159;
const square =x => x*x;
 module.exports.add=add;
module.exports.PI=PI;
module.exports.square=square;  */


/* <This is type 2>
const add =(x,y) => x+y;
const PI =3.14159;
const square =x => x*x; 
const math ={
    add:add,
    PI:PI,
    square:square
} 
module.exports =math;*/

//module.exports.chilna falna:) can also be written as exports.chilna falna
/* module.exports.add =(x,y) => x+y;
module.exports.PI=3.14159;
module.exports.square=x=> x*x;  */

exports.add =(x,y) => x+y;
exports.PI=3.14159;
exports.square=x=> x*x; 