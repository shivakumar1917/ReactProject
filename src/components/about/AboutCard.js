import React from 'react'
import './About.css';
function AboutCard() {
  return (
    <div>
        <div className='aboutCard mtop flex_space'>

            <div className='row row1'>
                <h4>About us</h4>
                <h1>
                    We<span>Provide Solution</span> to grow your business
                </h1>
                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                <button className='secondary-btn'>
                  Explore More <i className='fas fa-long-arrow-alt-right'></i>
                 </button>
            </div>

            <div className='row image'>
              <img src='/images/about-img-1.jpg' alt=''/>
              <div className='control-btn'>
                <button className='prev'>
                <i className='fas fa-play'></i>
                </button>
              </div>
            </div>

        </div>
    </div>
  )
}

export default AboutCard