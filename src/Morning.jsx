import React from "react";

function Morning(){
  
let curDate=new Date();
curDate=curDate.getHours();
let greeting='';
const stylecss={};
if (curDate>=1 && curDate<12){
  greeting='Good Morning';
  stylecss.color='green';
}else if(curDate>=12 && curDate<19){
  greeting='Good Afternoon';
  stylecss.color='orange';
}else{
  greeting='Good Night';
  stylecss.color='black';
}
return <>
<h1>Hello madam,<span style={stylecss}>{greeting}</span></h1>
</>
}
export default Morning;