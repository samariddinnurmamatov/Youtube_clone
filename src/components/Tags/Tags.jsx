import React, { useEffect } from 'react'
import './Tags.css'
import Next from '../../assets/Vector.png'

function Tags() {
    useEffect(()=>{
      const tags = document.querySelectorAll(".miniTag");
      if(tags){ 
        tags.forEach((tag)=>{
          tag.addEventListener('click',()=>{
            tags.forEach((tag)=>tag.classList.remove("active"))
            if(tag){
              tag.classList.add("active")
            }
          })
        })
      }
    })
    return (
      <div className='tags'>
            <div className='miniTag active'>
              All
            </div>
            <div className='miniTag'>
              Gaming
            </div>
            <div className='miniTag'>
              Barcelona 
            </div>
            <div className='miniTag'>
              Apple
            </div>
            <div className='miniTag'>
              Sports 
            </div>
            <div className='miniTag'>
              Music
            </div>
            <div className='miniTag'>
              Mixes
            </div>
            <div className='miniTag'>
              Live
            </div>
            <div className='miniTag'>
              EFootball
            </div>
            <div className='miniTag'>
              Editing
            </div>
            <div className='miniTag'>
              Game
            </div>
          <img src={Next} alt="" />
      </div>
    )
}

export default Tags

