import React from 'react';
import './SidebarRow.css';

function SidebarRow(props) {
  return (
    <div className='sidebar_row'>
      <img className='sidebarRow_img' src={props.img} alt="" />
      <h2 className='sidebarRow_title'>{props.title}</h2>
    </div>
  )
}

export default SidebarRow