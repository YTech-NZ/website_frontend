import { initializeApp } from "firebase/app";
import { getFirestore, doc } from "firebase/firestore";
import { collection, getDocs, getDoc } from "firebase/firestore";
import {BsFillPeopleFill} from 'react-icons/bs';
import firebaseConfig from '../components/auth/firebase_hosting/firebaseConfig'
import NavBar from '../components/Navbar'
import '../styles/events.scss'

import React, { useEffect, useState } from 'react';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Events() {
  const [events, setEvents] = useState([{title: "", description: "", image: ""}]);
  const eventsCollectionRef = collection(db, "events")

  const getEvents = async () => {
    const data = await getDocs(eventsCollectionRef)
    var title = "";
    var desc = "";
    var image = "";
    data.docs.map((doc) => (
      title = doc.data().title,
      desc = doc.data().description,
      image = doc.data().image,
      setEvents(events => [...events, {title: title, description: desc, image: image}])))
  }

  useEffect(() => {
    getEvents();
  }, [])

  const getEvent = async (id: string) => {
    const docRef = doc(db, "events", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
      <>
        <NavBar />
        <div className="events_container">
          {events?.slice(1).map((event) => {
            return(
              <div className="event_item">
                <img src={event.image} alt={event.title}/>
                <h1>{event.title}</h1>
                <p>{event.description}</p>
                <div className="attendance_container">
                  <BsFillPeopleFill className="attendance_icon"/>
                  <div className="event_stats">
                    <p>300 Students</p>
                    <div className="gender_percentage">
                      <p>50% Male</p>
                      <p>50% Female</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
}

export default Events