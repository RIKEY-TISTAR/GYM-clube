import { Hero } from '@/components/Hero/Hero'
import { ShotLeft } from '@/components/ShotLeft/ShotLeft'
import { ShotRight } from '@/components/ShotRight/ShotRight'
import { Variants } from '@/components/Variants/Variants'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero/>
    <Variants/>
    <ShotRight/>
    <ShotLeft/>
    </>
  )
}

export default page
