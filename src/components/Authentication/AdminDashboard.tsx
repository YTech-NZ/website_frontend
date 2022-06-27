import Section from '../../widgets/Section';
import SignOut from './firebase_hosting/SignOut'

function AdminDashboard() {
    
  return (
      <Section>  
        <h1>Admin Dashboard</h1>
        <p>Hello Max!</p>
        <button onClick={SignOut}>Sign out</button>
      </Section>
  )
}

export default AdminDashboard;
