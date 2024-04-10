import React from 'react'
import Image from 'next/image';
import Heroimg from '/public/assets/images/hero/bg.jpg';

export const Hero = () => {
  return (
    <section className='hero'>

      <div className="bg relative w-full">

        <div className="object-cover absolute mix-blend-owerlay -z-10">
          <Image width={1920} height={1080} className='w-full' src={Heroimg} alt="-_-" />
        </div>
        {/* <img className='w-full h-full object-cover absolute mix-blend-owerlay' src="/public/assets/images/Hero/BG.jpg" alt="" /> */}

        <div className="text-section container mx-auto w-full ">

          <div className="hero-title-section full mb-4">
            <h2 className=" hero-title text-center text-white">Достигните своих целей в области здоровья и фитнеса в кратчайшие сроки</h2>
          </div>

          <div className="hero-subtitle-section w-full mb-4">
            <p className="hero-subtitle text-center text-white">
            Неважно, хотите ли вы стать сильнее,
            сжечь жир или просто оставаться в форме,
            наши тренеры мирового класса будут сопровождать вас на каждом этапе пути.
            </p>
          </div>

          <div className="button-section">
            <button className='hero-btn bg-yellow-300 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-full'>Начать 7-дневную бесплатную пробную версию</button>
          </div>

        </div>

      </div>


    </section>
  )
}
