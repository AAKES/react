import React from "react";
import Card from './Cards';
import './index.css';
import Cdata from './Cdata';
const App = () => {
   return (
    <>
    <h1 className='heading'>Top 3 best profile</h1>
    {Cdata.map((val,index)=>  {
        return(
            <Card  
                    key={val.id}
                    imgsrc={val.imgsrc} 
                    title ={val.title}
                    sname={val.sname}
                    link={val.link}/>
        );
    })} 
    </>
   );
    
}
export default App;