import React from "react";

function sum(a,b){
    let sum=a+b;
    return(sum);
}
function sub(a,b){
    let sub=a-b;
    return(sub);
}
function div(a,b){
    div=a/b;
    div=div.toFixed(2);
    return(div);
}
function mul(a,b){
    mul=a*b;
    return(mul);
}
export {sum,div,mul,sub};