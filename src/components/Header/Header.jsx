import React, { Component } from 'react'
import './Header.css'
import '../Tags/Tags.css';

import MenuIcon from '../../assets/Menu.png';
import YtLogo from '../../assets/ytLogo.png';
import SearchIcon from "../../assets/Search.png";
import VideoCallIcon from "../../assets/VideoCall.png";
import NotificationIcon from "../../assets/Notification.png";
import Microphone from "../../assets/ovoz.png";
import Avatar from "../../assets/avatar.png";
import SidebarRow from '../sidebar/SidebarRow';

import Home from '../../assets/Home.png';
import Explover from '../../assets/Explover.png';
import Shorts from '../../assets/Shorts.png';
import Subscribe from '../../assets/Subscribe.png';

import Library from '../../assets/Library.png';
import History from '../../assets/History.png';
import Your from '../../assets/Your.png';
import Vatch from '../../assets/Vatch.png';
import Pop from '../../assets/Pop.png';

import Barca from '../../assets/Barca.png';
import Ted from '../../assets/Ted.png';
import N from '../../assets/N.png';
import Ed from '../../assets/Ed.png';
import Fifa from '../../assets/Fifa.png';
import './Sidebar.css';
import SubscriptionRow from '../sidebar/SubscriptionRow';

export class Header extends Component {
  render() {
    
    const toggleSidebar = () => {
      const sidebar = document.querySelector(".sidebar");
      const MiniSidebar = document.querySelector(".mini_sidebar");
      if(sidebar){
        sidebar.classList.toggle("active");
      }
      if(MiniSidebar){
        MiniSidebar.classList.toggle("active")
      }
    }
    
    return (
      <div className='header'>
        <div className='flex_header'>
            <div className='logo_flex'>
              <div onClick={toggleSidebar}><img className='Menu' src={MenuIcon} alt="" /></div>
              <div><img src={YtLogo} alt="" /></div>
            </div>

            <div className='input_flex'>
              <div className='inp_box'>
                <input className='SearchInput' type="text"  placeholder='Search'/>
                <img src={SearchIcon} alt="" />
              </div>
              <img className='mic' src={Microphone} alt="" />
            </div>

            <div className='avatar_flex'> 
              <img src={VideoCallIcon} alt="" />
              <img src={NotificationIcon} alt="" />
              <img src={Avatar} alt="" />
            </div>
        </div>
        
        <div className='sidebar'>
          <SidebarRow img={Home} title="Home" />
          <SidebarRow img={Explover} title="Explore" />
          <SidebarRow img={Shorts} title="Shorts" />
          <SidebarRow img={Subscribe} title="Subscriptions" />
          <hr />
          <SidebarRow img={Library} title="Library" />
          <SidebarRow img={History} title="History" />
          <SidebarRow img={Your} title="Your videos" />
          <SidebarRow img={Vatch} title="Watch later" />
          <SidebarRow img={Pop} title="Pop" />
          <h4 className='sidebar_heading'>Show more</h4>
          <hr />
          <h4 className='sidebar_heading'>SUBSCRIPTIONS</h4>
          <SubscriptionRow img={Barca} name="FC Barcelona" />
          <SubscriptionRow img={Ted} name="TED" />
          <SubscriptionRow img={N} name="NNGroup" />
          <SubscriptionRow img={Ed} name="ED Sheeran" />
          <SubscriptionRow img={Fifa} name="FIFA" />
          <h4 className='sidebar_heading'>Show more</h4>
          <hr />
          <h4 className='sidebar_heading'>MORE ON YOUTUBE</h4>
          <SidebarRow img={Library} title="Settings" />
          <SidebarRow img={History} title="Report history" />
          <SidebarRow img={Your} title="Help" />
          <SidebarRow img={Vatch} title="Send Feedback" />
          <hr />
        </div>
        <div className='mini_sidebar'>
          <div className='miniDiv'>
            <img src={Home} alt="" />
            <p>Home</p>
          </div>
          <div className='miniDiv'>
            <img src={Explover} alt="" />
            <p>Explore</p>
          </div>
          <div className='miniDiv'>
            <img src={Subscribe} alt="" />
            <p>Subscrap</p>
          </div>
          <div className='miniDiv'>
            <img src={VideoCallIcon} alt="" />
            <p>Library</p>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Header;