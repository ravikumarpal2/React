import React from 'react'

function Card({username='rkp',post='not assigned yet'}) {
  return (
    <div>
      <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">Lorem ipsum, dolor sit amet </span>
  
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>{username}</span>
      <span>{post}</span>
      <span></span>
    </span>
  </div>
</div>
    </div>
  )
}

export default Card
