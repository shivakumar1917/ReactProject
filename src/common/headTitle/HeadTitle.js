import React from 'react'
import { useLocation,Link } from 'react-router-dom';

import './HeadTitle.css';
function HeadTitle() {
    const location = useLocation()
  return (
    <div>
        <section className='image-heading'>
            <div className='container'>
            <h1>{location.pathname.split("/")[1]}</h1>

                <button>
                    <Link to='/'>Home</Link>
                    <span>{location.pathname.split("/")[1]}</span>
                    
                </button>
            </div>
        </section>
    </div>
  )
}

export default HeadTitle