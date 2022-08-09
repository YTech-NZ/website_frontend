import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore";
import firebaseConfig from './auth/firebase_hosting/firebaseConfig'

import React, { useEffect, useState } from 'react';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function Events() {
  const [events, setEvents] = useState([{title: "", description: "", image: ""}]);
  const eventsCollectionRef = collection(db, "events")
  useEffect(() => {
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

    getEvents();
  }, [])

  return (
      <>
        {events?.slice(1).map((event) => {
          return(
            <>
              <h1>{event.title}</h1>
              <p>{event.description}</p>
              <img width="400px" src={event.image} />
            </>
          )
        })}
      </>
    )
}

export default Events