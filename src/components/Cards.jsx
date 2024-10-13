import React from 'react'

const Cards = (props) => {
  return (
    <>
      <div className='mt-5 flex-wrap mr-7 bg-white text-black inline-block py-2 px-4'>
        <img className='h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
       <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
       <h2 className='text-xl font-semibold'>{props.profession}</h2>
       <h2>{props.city} , {props.age}</h2>
       <button className='mt-2 rounded font-medium bg-emerald-700 text-white px-4 py-2'>Add Friend</button>
      </div>
    </>
  )
}

export default Cards
