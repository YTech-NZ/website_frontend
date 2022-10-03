import Section from '../../widgets/Section';
import SignOut from './firebase_hosting/SignOut'
import '../../styles/adminDashboard.scss';

import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, updateDoc, addDoc, deleteDoc, getFirestore } from "firebase/firestore";
import firebaseConfig from './firebase_hosting/firebaseConfig'
import { useState, useEffect } from 'react'

import {ImCross} from 'react-icons/im';

function AdminDashboard() {
  // what admin sees when they successfully log in.

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const eventFormat = {id: "", title: "", description: "", image: ""};

  const [events, setEvents] = useState([eventFormat]);
  const [currentEvent, setCurrentEvent] = useState(eventFormat);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const eventsCollectionRef = collection(db, "events")

  const saveEvent = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  
    const target = event.target as typeof event.target & {
      title: { value: string };
      description: { value: string };
      image: { value: string };
    };
    const title = target.title.value;
    const description = target.description.value;
    const image = target.image.value;

    const docRef = await addDoc(collection(db, "events"), {
      title: title,
      description: description,
      image: image
    });

    alert("New event has been added !")

    setEvents([...events, {id: docRef.id, title, description: description, image: image}]);
  } 

  const updateEvent = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      title: { value: string };
      description: { value: string };
      image: { value: string };
    };

    const eventRef = doc(db, "events", currentEvent.id);
    await updateDoc(eventRef, {
      title: target.title.value,
      description: target.description.value,
      image: target.image.value
    }).then(() => {
      setTitle("");
      setDescription("");
      setImage("");

      alert(title + " has been updated !")
    })

    const removedUpdatedEvent = events.filter(event => event.id !== currentEvent.id);
    setEvents([...removedUpdatedEvent, {id: currentEvent.id, title: title, description: description, image: image}])
    setCurrentEvent(eventFormat);
  }

  const getEvents = async () => {
    const data = await getDocs(eventsCollectionRef)
    var id = "";
    var title = "";
    var desc = "";
    var image = "";
    data.docs.map((doc) => (
      id = doc.id,
      title = doc.data().title,
      desc = doc.data().description,
      image = doc.data().image,
      setEvents(events => [...events, {id: id, title: title, description: desc, image: image}])))
  }

  useEffect(() => {
    getEvents();
  }, [])

  useEffect(() => {
    setTitle(currentEvent.title);
    setDescription(currentEvent.description);
    setImage(currentEvent.image);
  }, [currentEvent])
  
  const openDetail = (event: any) => {
    if(currentEvent == event) {
      setCurrentEvent(eventFormat);
    } else {
      setCurrentEvent(event);
    }
  }

  const deleteEvent = async (eventInput: any) => {
    await deleteDoc(doc(db, "events", eventInput.id)).then(() => {
      alert(eventInput.title + " has been deleted !");
    });

    setEvents(events.filter(event => event.title !== eventInput.title));
  }

  return (
    <>
      <Section>  
        <h1>Admin Dashboard</h1>
        <p>Hello YTech!</p>
        <button onClick={SignOut}>Sign out</button>
      </Section>
      <Section className='float_container'>
        <div>
          <form onSubmit={saveEvent}>
            <h3>
              Add new event
            </h3>
            <label>Title</label>
            <br/>
            <input type="text" id="title" placeholder="Event title"/>
            <br/>
            <label>Description</label>
            <br/>
            <textarea rows={20} cols={50} id="description" placeholder="Event description" />
            <br/>
            <label>Image URL</label>
            <br/>
            <textarea rows={4} cols={30} id="image" placeholder="Image link"/>
            <br/>
            <br/>
            <button type="submit">Save</button>
          </form>
        </div>
      </Section>
      <Section>
        <div className='float_child'>
          <h3>Events</h3>
          {events?.slice(1).map((event) => {
            return(
              <ol key={event.title}>
                <a className="event" onClick={() => {openDetail(event)}}><h4>{event.title}</h4></a>
                <ImCross onClick={() => {deleteEvent(event)}} className='cross'/>
              </ol>
            )
          })}
        </div>
        <div className='float_child'>
          <h3>Details</h3>
          {currentEvent.title == "" && (
            <h5>Select an event to view their details</h5>
          )}
          {currentEvent.title !== "" && (
            <form onSubmit={updateEvent}>
              <label>Title</label>
              <br/>
              <input type="text" id="title" placeholder={"Event title"} value={title} onChange={event => setTitle(event.target.value)}/>
              <br/>
              <label>Description</label>
              <br/>
              <textarea rows={20} cols={50} id="description" placeholder="Event description" value={description}  onChange={event => setDescription(event.target.value)} />
              <br/>
              <label>Image URL</label>
              <br/>
              <textarea rows={4} cols={30} id="image" placeholder="Image link" value={image} onChange={event => setImage(event.target.value)}/>
              <br/>
              <img src={currentEvent.image} width="300px"/>
              <br/>
              <button type="submit">Update</button>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}

export default AdminDashboard;
