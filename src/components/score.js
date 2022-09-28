import React from "react";

const score = (props) => {
    return(
        <div className="score-block">
            Your score is : {props.points}/{props.length}
            <button className="btn btn-outline-success try-btn btn-lg" type="submit" onClick={props.resetQuiz}>Try again</button>
        </div>
    )
}

export default score