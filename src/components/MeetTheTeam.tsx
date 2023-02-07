import { useEffect, useState } from 'react';
import YtechTeam from '../data/YtechTeam'
import { TeamMember } from '../types/TeamMember';
import LEFT_ARROW from "../assets/left_arrow.png"
import RIGHT_ARROW from "../assets/right_arrow.png"
import "../styles/meettheteam.scss";
import "../styles/splash.scss";

function MeetTheTeam() {
  const numOfMembersShown = 3;
  const [currentMembers, setCurrentMembers] = useState<(TeamMember | undefined)[]>(YtechTeam.slice(0, numOfMembersShown));
  const [slides, setSlides] = useState<HTMLImageElement[]>([]);

  function animateMembers() {
    const members = document.getElementsByClassName('member')!;
    for(var i = 0, all = members.length; i < all; i++){   
      members[i].classList.remove('fade');
      let reflow = (members[i] as HTMLElement).offsetWidth;  // required to cause the animation to reset
      members[i].classList.add('fade');
    }
  }

  async function next() {
    const updatedCurrentMembers = await Promise.all(currentMembers.map(async member => {
      const indexOfMember = YtechTeam.indexOf(member);
      if (indexOfMember === YtechTeam.length - 1) {
        return member = YtechTeam.at(0);
      } else {
        return member = YtechTeam.at(indexOfMember + 1);
      }
    }));
    setCurrentMembers(updatedCurrentMembers);
  };

  async function prev() {
    const updatedCurrentMembers = await Promise.all(currentMembers.map(member => {
      const indexOfMember = YtechTeam.indexOf(member);
      if (indexOfMember === 0) {
        return member = YtechTeam.at(-1);
      } else {
        return member = YtechTeam.at(indexOfMember - 1);
      }
    }));
    setCurrentMembers(updatedCurrentMembers);
  };

  // preloading all the images. reference: https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
  useEffect(() => {
    let preloadedImages: typeof slides = [];
    YtechTeam.forEach((member) => {
      const image = member?.squarePhotoUrl as string;
      let preloadedImage = new Image();
      preloadedImage.src = image;
      preloadedImages.push(preloadedImage);
    })
    setSlides(preloadedImages);
  }, []);

  return (
    <div className="meet-the-team">

    <h1>Meet The Team</h1>

    <div className="team-carousel">
      <img alt="left arrow" src={LEFT_ARROW} className="leftArrow" height="65px" width="65px" onClick={function() {prev(); animateMembers()}}/>
      <img alt="right arrow" src={RIGHT_ARROW} className="rightArrow" height="65px" width="65px" onClick={function() {next(); animateMembers()}}/>

      {currentMembers.map((member) => {
        return (
          <div className="member">
            <img src={member?.squarePhotoUrl} className="team-carousel-img" alt={`${member?.name}`} key={member?.name}/>
            <h3 className='team-carousel-name'>{member?.name}</h3>
            <h4>{member?.title}</h4>
          </div>
        )
      })}

    </div>
    </div>

  )
}

export default MeetTheTeam