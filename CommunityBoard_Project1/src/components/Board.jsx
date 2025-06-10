import React from "react";

const Board = (props) => {

    return (
        <div className="Board">
            
            <div className="img-box">
                <img className="board-img" src={props.img}/>
            </div>

            <div className="info-box">
                <h2>{props.eventName}</h2>
                <p>{props.info}</p>
            </div>

            <div className="button-box">
                <a href={props.link}>
                <button className="info-button">Learn More</button>
                </a>
            </div>
            
        </div>

    );
}

export default Board;