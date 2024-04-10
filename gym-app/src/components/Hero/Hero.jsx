import React from 'react'
import Image from 'next/image';
import Heroimg from '/public/assets/images/hero/bg.jpg';

export const Hero = () => {
  return (
    <section className='hero '>
      <div className="container mx-auto w-full">
        
        <div className="bg relative w-full h-auto">
          {/* <img className='w-full h-full object-cover absolute mix-blend-owerlay' src="/public/assets/images/Hero/BG.jpg" alt="" /> */}
           <Image width={1920} height={1080} className='object-cover absolute mix-blend-owerlay' src={Heroimg} alt="-_-" />
        </div>

      </div>
    </section>
  )
}
      {/* <div style="background-image: url('/assets/img/Hero/BG.jpg');"  className="img"></div> */}
// bg-[url("https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]
