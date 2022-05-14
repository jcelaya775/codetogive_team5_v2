import React, { useState } from 'react'
import Question from '../components/Question'
import Typography from '@mui/material/Typography'
import Confirm from '../components/Confirm'
import { useNavigate } from 'react-router-dom'

const questions = [
  `On a
scale from 1 to 10, how much are you interested in Data Science?`,
  `On a
scale from 1 to 10, how much are you interested in Software?`,
  `On a
  scale from 1 to 10, how much are you interested in Business?`,
  `On a
  scale from 1 to 10, how much are you interested in Security?`,
  `On a
  scale from 1 to 10, how much are you interested in Research?`,
  `On a
  scale from 1 to 10, how much are you interested in Financial Technology?`,
  `On a
  scale from 1 to 10, how much are you interested in Consulting?`,
  `On a
  scale from 1 to 10, how much are you interested in Artifical Intelligence?`,
  `On a
  scale from 1 to 10, how much are you interested in Robotics?`,
  `On a
  scale from 1 to 10, how much are you interested in Web Development?`,
  `On a
  scale from 1 to 10, how much are you interested in Mobile App Development?`,
  `On a
  scale from 1 to 10, how much are you interested in Game Development?`,
  `On a
  scale from 1 to 10, how much are you interested in Biotechnology?`,
]

export default function () {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    navigate('/main/pair')
    // const data = new FormData(event.currentTarget)
    // const options = {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: {
    //     email: data.get('email'),
    //     password: data.get('password')
    //   }
    // }

    // fetch('http://localhost:5000/api/mentees/{email}', options)
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .then(() => navigate('/main/forum'))
  }

  return (
    // <div className='container mx-auto px-10 py-12'>
    //     <div className='py-10'>
    //       <Questionnarre />
    //     </div>
    //   </div>
    <div className='container border-2 p-10 rounded-xl shadow-lg m-auto py-10 text-center max-w-xl'>
      <Typography variant='h2' component='h1' gutterBottom>
        Welcome to AlphaPair!
      </Typography>
      <h2 className='text-base pb-10'>
        We're so excited to have you join our platform! We make it our primary
        goal to match you with the most relevant and helpful mentors that we
        select just for you. In order to help us accomplish this, please answer
        of the questions below and then we'll get you started!
      </h2>

      <div className='text-left'>
        {questions.map((question, id) => (
          <Question key={id} text={question} data={data} />
        ))}
      </div>

      <div className='container py-10 text-center'>
        <Confirm label='Submit' onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
