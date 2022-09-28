import React from "react";

const Card = (props) => {
    return(
        <div className="main-card">
            <div className="question-num col-lg">
                <span>{props.currentQues + 1}</span>/ {props.length}
            </div>

            <div className="question-text col-lg">
                {props.quesText}
            </div>

            <div className="answer-block col-lg">
                {props.answer}
            </div>
        </div>
    )
}

export default Card