import React from "react";
import './index.css';
import Images from "./Images";

function Cards(props){
    return(
        <>
        <div className="cards">
            <div className="card">
            <Images imgsrc={props.imgsrc}/>
                <div className="card_info">
                    <h3 className="card_title">{props.sname}</h3>
                <a href={props.link}>
                    <button>View Profile</button>
                </a>
                </div>
            </div>
        </div>
        </>
    );
}
export default Cards;