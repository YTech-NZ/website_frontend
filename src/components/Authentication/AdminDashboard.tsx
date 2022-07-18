import Section from '../../widgets/Section';
import SignOut from './firebase_hosting/SignOut'

function AdminDashboard() {
  // what admin sees when they successfully log in.
    
  return (
      <Section>  
        <h1>Admin Dashboard</h1>
        <p>Hello YTech!</p>
        <button onClick={SignOut}>Sign out</button>
      </Section>
  )
}

export default AdminDashboard;
