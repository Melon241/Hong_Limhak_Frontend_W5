import { useState } from 'react'
import './App.css'

const AuthorInfo = ({user}) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.role}</h2>
    </div>
  )
}
const PostHeader = ({user}) => <AuthorInfo user={user} />
const PostItem = ({user}) => <PostHeader user={user} />
const FeedList = ({user}) => <PostItem user = {user} />
function App() {
  const [user] = useState({name: "John cena", role: "admin"})
  return <FeedList user={user} />
}

export default App
