import React, { Component } from 'react'
import './Home.css'
import Tags from '../Tags/Tags'
import VideoCard from '../VideoCard/VideoCard'
import VideoImg from '../../assets/Vde.png';
import Img2 from '../../assets/image 2.png';
import Img3 from '../../assets/image 3.png';
import Img4 from '../../assets/image 4.png';
import Img5 from '../../assets/image 5.png';
import Img6 from '../../assets/image 6.png';
import Img7 from '../../assets/image 7.png';
import Img8 from '../../assets/image 8.png';
import Img9 from '../../assets/image 9.png';
import Img10 from '../../assets/image 10.png';
import Img11 from '../../assets/image 11.png';
import Avatar from '../../assets/Bar.png'

export class Home extends Component {
  render() {
    return (
      <div className='homepage'>
        <Tags />
        <VideoCard thubnail={VideoImg}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
        <VideoCard thubnail={Img2}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
        <VideoCard thubnail={Img3}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
        <VideoCard thubnail={Img4}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
        <VideoCard thubnail={Img5}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
        <VideoCard thubnail={Img6}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
        <VideoCard thubnail={Img7}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
        <VideoCard thubnail={Img8}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
        <VideoCard thubnail={Img9}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
        <VideoCard thubnail={Img10}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
        <VideoCard thubnail={Img11}  channelLogo={Avatar} title={"🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH...."} channelName={"FC Barcelona"} views={"443K Views"} time={"22 hours ago"} />
      </div>
    )
  }
}

export default Home