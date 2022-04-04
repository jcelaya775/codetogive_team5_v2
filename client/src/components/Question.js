import React from 'react'
import Select from './Select'
import Slider from './Slider'

export default function Question({ text, onSubmit }) {
  return (
    <div className='container mx-auto w-2xl lg:max-w-6xl'>
      <p className='pb-4'>{text}</p>
      <Slider />
    </div>
  )
}
