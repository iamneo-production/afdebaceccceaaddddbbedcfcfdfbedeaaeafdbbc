import React from 'react'
import StartButton from '../Button/StartButton'

const Banner = ({setIsStart, isStart}) => {
  return (
    <div>
      <h2>Quiz App</h2>
      <StartButton option={"Start Quiz"} onClick={() => setIsStart(!isStart)} />
    </div>
  )
}

export default Banner
