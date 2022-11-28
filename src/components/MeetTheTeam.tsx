import { useState } from 'react';
import YtechTeam from '../data/YtechTeam'
import { TeamMember } from '../types/TeamMember';
import { StyledSlider } from './SlideImage';
import LEFT_ARROW from "../assets/left_arrow.png"
import RIGHT_ARROW from "../assets/right_arrow.png"


function MeetTheTeam() {
  const numOfMembersShown = 3;
  const [currentMembers, setCurrentMembers] = useState<(TeamMember | undefined)[]>(YtechTeam.slice(0, numOfMembersShown));

  function next() {
    const updatedCurrentMembers = currentMembers.map(member => {
      const indexOfMember = YtechTeam.indexOf(member);
      if (indexOfMember === YtechTeam.length) {
        return member = YtechTeam.at(-1);
      } else {
        return member = YtechTeam.at(indexOfMember + 1);
      }
    })
    setCurrentMembers(updatedCurrentMembers);
  };

  function prev() {
    const updatedCurrentMembers = currentMembers.map(member => {
      const indexOfMember = YtechTeam.indexOf(member);
      if (indexOfMember === 0) {
        return member = YtechTeam.at(YtechTeam.length);
      } else {
        return member = YtechTeam.at(indexOfMember - 1);
      }
    })
    setCurrentMembers(updatedCurrentMembers);
  };

  return (
    <StyledSlider>
      <img src={LEFT_ARROW} className="leftArrow" height="65px" width="65px" onClick={prev}/>
      <img src={RIGHT_ARROW} className="rightArrow" height="65px" width="65px" onClick={next}/>

      {currentMembers.map((member) => {
        return <img src={member?.squarePhotoUrl} className="team-carousel-img" alt={`${member?.name} Photo`}/>
      })}

    </StyledSlider>

  )
}

export default MeetTheTeam