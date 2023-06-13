import React from 'react'
import { Link } from 'react-router-dom'

const Dcard=({item:{id,image,title,desc,sidepara,paraImage_one,paraImage_two}})=> {
  return (
    <div>
        <div className='items'>

            <div className='img'>
                <img src={image} alt=''/>

                <Link to={`/singlepage/${id}`} className='blogItem-link'>
                    <i className='fas fa-external-link-alt'></i>
                </Link>
            </div>

            <div className='title'>
                <h>{title}</h>
            </div>

        </div>
         
    </div>
  )
}

export default Dcard