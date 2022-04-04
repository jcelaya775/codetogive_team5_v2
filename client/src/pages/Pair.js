import React from 'react'
import Card from '../components/Card'
import { Button } from '@mui/material'

export default function Pair() {
  return (
    <div className='container mx-auto p-10 flex flex-between flex-wrap gap-6'>
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
