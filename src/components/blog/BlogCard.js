import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard=({item:{id,date,categeory,title,cover,para,desc}})=> {
  return (
    <div>
        <div className='items'>
            <div className='img'>
                <img src={cover} alt=''/>
            </div>

            <div className='category flex_space'>
                <span>{date}</span>
                <label>{date}</label>
            </div>

            <div className='details'>
                <h3>{title}</h3>
                <p>{para}</p>
            </div>

            <Link to={`/blogsingle/${id}`} className='blogItem-link'>
                READ MORE <i className='fa fa-long-arrow-alt-right'></i>
            </Link>

        </div>
    </div>
  )
}

export default BlogCard