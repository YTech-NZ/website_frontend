import React from 'react'
import YtechTeam from '../data/YtechTeam'
import Slider from './Slider'

function MeetTheTeam() {

  const teamPhotos:Object[] = [];

  YtechTeam.forEach(member => {
    teamPhotos.push({
      image: member.circlePhotoUrl
    });
  });



  return (
    <>
        <Slider slides={teamPhotos} />
    </>
  )
}

export default MeetTheTeam