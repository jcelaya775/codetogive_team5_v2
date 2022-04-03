import React, { useEffect } from 'react'

const items = ['Home', 'About', 'Projects', 'Testimonials']

export default function Sidebar({ isActive }) {
  return (
    <div
      id='wrapper'
      className={`fixed ${
        isActive ? 'translate-x-[-100%]' : 'translate-x-0'
      } ease-out duration-300 py-32 min-h-screen max-w-screen-sm w-full bg-zinc-800`}
    >
      <div className='flex flex-col justify-start items-start pl-[15%] text-white text-4xl font-robo'>
        {items.map((item, key) => (
          <h1
            key={key}
            className='p-2  hover:cursor-pointer hover:font-semibold'
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  )
}
