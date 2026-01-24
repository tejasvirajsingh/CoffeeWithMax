import React from 'react';
import {FaStar} from 'react-icons/fa';

export default function Hero() {
  return (
    <section>
      <div className='relative z-50 flex flex-col justify-center items-center w-full max-w-3xl mx-auto px-2 sm:px-4 min-h-[calc(100vh-150px)]'>
        {/* main components */}
        <div className='flex flex-wrap justify-center items-center text-sm gap-1 font-medium text-coffeeBrown mb-8 sm:mb-12'>
          {Array(5).fill(0).map((_,i) => (
            <FaStar key={i} />
          ))}
          <span className='ml-2'>Loved by 1M+ Coffee Supporters</span>
        </div>
      </div>
    </section>
  )
}
