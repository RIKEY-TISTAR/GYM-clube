import React from 'react'
import Image from 'next/image';
import TimeTablework from '/public/assets/images/time-table/dumbbell.png';
import TimeTableweekends from '/public/assets/images/time-table/rest.png';

export const TimeTable = () => {
  return (
    <section className='timetable'>

        <div className="container mx-auto">
            
            <h2 className="timetable-title">

            </h2>

            <div className="timetable-section">

                <div className="timetable-work">

                    <div className="timetable-work-icon">
                        <Image width={1920} height={1080} className='w-full' src={TimeTablework} alt="-_-" />
                    </div>

                    <p className="timetable-work-desc">
                        В буднии дни мы работаем с 6:00 до 18:00
                    </p>
                </div>

                <div className="timetable-weekends">

                </div>

            </div>

            



        </div>

    </section>
  )
}
