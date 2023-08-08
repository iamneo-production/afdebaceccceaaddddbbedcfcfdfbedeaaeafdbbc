import React from 'react'
import StartButton from '../Button/StartButton'

const Banner = ({setIsStart, isStart}) => {
  return (
    <div>
      <h1>Quizz App</h1>
      <StartButton option={"Start Quiz"} onClick={() => setIsStart(!isStart)} />
    </div>
  )
}

export default Banner
