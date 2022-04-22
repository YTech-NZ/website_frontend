import SignOut from '../firebase_hosting/SignOut'

function AdminDashboard() {
  return (
      <>  
      <h1>AdminDashboard</h1>
      <button onClick={SignOut}>Sign out</button>
      </>
  )
}

export default AdminDashboard;
