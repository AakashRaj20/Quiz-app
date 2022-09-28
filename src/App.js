import React from "react";
import { useState } from "react";
import Card from "./components/card"
import Score from "./components/score"
import Data from "./data"

function App() {

const [currQuestion, setCurrQuestion] = useState(0)
const [score, setScore] = useState(0)
const [showScore, setShowScore] = useState(false)

const handleResponse = (isCorrect) => {
  if(isCorrect){
    setScore(score + 1)
  }

  const nextQuestion = currQuestion + 1

  nextQuestion < Data.length ? setCurrQuestion(nextQuestion) : setShowScore(true)
}

const resetQuiz = () => {
  setCurrQuestion(0)
  setScore(0)
  setShowScore(false)
}


  return (
    <div className="App conatiner">
      {showScore ?
        <Score 
          points = {score}
          length = {Data.length}
          resetQuiz = {resetQuiz}
        /> 
        :
        <Card 
          currentQues = {currQuestion}
          length = {Data.length}
          quesText = {Data[currQuestion].ques}
          answer = {Data[currQuestion].res.map((Ans) => (
            <button className="btn ans-btn btn-outline-primary" onClick={() => handleResponse(Ans.isCorrect)}>{Ans.ans}</button>
        ))}
      />
    }
    </div>
  );
}

export default App;
