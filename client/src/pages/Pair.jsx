import React from 'react'
import Card from '../components/Card'
import { Button } from '@mui/material'

export default function Pair() {
  return (
    <div className='container mx-auto py-10 flex flex-between justify-center flex-wrap gap-6'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
