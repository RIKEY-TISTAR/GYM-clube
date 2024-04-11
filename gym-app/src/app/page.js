import { Hero } from '@/components/Hero/Hero'
import { ShotLeft } from '@/components/ShotLeft/ShotLeft'
import { ShotRight } from '@/components/ShotRight/ShotRight'
import { Stock } from '@/components/Stock/Stock'
import { TimeTable } from '@/components/TimeTable/TimeTable'
import { Variants } from '@/components/Variants/Variants'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero/>
    <Stock/>
    <Variants/>
    <ShotRight/>
    <ShotLeft/>
    <TimeTable/>
    </>
  )
}

export default page
