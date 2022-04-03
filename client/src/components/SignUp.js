import React, { useState } from 'react'
import Question from './Question'
import Confirm from './Confirm'

const questions = [
  `Here is a sample question that the user is going to respond to. From a
scale of 1 to 10, how much you agree with this?`,
  `Here is a sample question that the user is going to respond to. From a
scale of 1 to 10, how much you agree with this?`,
  `Here is a sample question that the user is going to respond to. From a
scale of 1 to 10, how much you agree with this?`,
  `Here is a sample question that the user is going to respond to. From a
scale of 1 to 10, how much you agree with this?`,
  `Here is a sample question that the user is going to respond to. From a
scale of 1 to 10, how much you agree with this?`,
]

export default function () {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className='container border-2 p-10 rounded-xl shadow-lg m-auto py-10 text-center max-w-xl'>
      <h1 className='text-4xl'>Welcome to AlphaPair!</h1>
      <h2 className='text-base pt-5 pb-10'>
        We're so excited to have you join our platform! We make it our primary
        goal to match you with the most relevant and helpful mentors that we
        select just for you. In order to help us accomplish this, please answer
        of the questions below and then we'll get you started!
      </h2>

      {questions.map((question) => {
        return <Question text={question} />
      })}

      <div className='container py-10 text-center'>
        <Confirm label='Submit' />
      </div>
    </div>
  )
}
