import Section from '../../widgets/Section';
import SignOut from './firebase_hosting/SignOut'

import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import firebaseConfig from './firebase_hosting/firebaseConfig'
import { useState } from 'react'

function AdminDashboard() {
  // what admin sees when they successfully log in.

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

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

    const data = {
      title: title,
      description: description,
      image: image
    }

    await setDoc(doc(db, "events", title), data)

    setTitle("");
    setDescription("");
    setImage("");

    alert("New event has been added !")
  }

  return (
    <>
      <Section>  
        <h1>Admin Dashboard</h1>
        <p>Hello YTech!</p>
        <button onClick={SignOut}>Sign out</button>
      </Section>
      <Section>
        <form onSubmit={saveEvent}>
          <label>
            Add new event
          </label>
          <br/>
          <input type="text" id="title" placeholder="Event title" value={title} onChange={event => setTitle(event.target.value)}/>
          <input type="textarea" id="description" placeholder="Event description" value={description}  onChange={event => setDescription(event.target.value)}/>
          <input type="text" id="image" placeholder="Image link" value={image} onChange={event => setImage(event.target.value)}/>
          <br/>
          <br/>
          <button type="submit">Save to firesotre</button>
        </form>
      </Section>
    </>
  )
}

export default AdminDashboard;
