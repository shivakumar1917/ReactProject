import React from 'react'
import Card from './Card'
import Tdata from './Tdata'
import './Testimoial.css'

const Allitem=()=> {
  return (
    <div>
        <section className='Testimonial mtop'>
            <div className='container grid1'>
                {Tdata.map((value,index)=> {
                    return <Card key={index} {...value}/>
                })}
            </div>
        </section>
    </div>
  )
}

export default Allitem