import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPost ] = useState ([{id: 1, text: "Hello", isEdited: false}]);

  const markAsEdited = (id) => {
    setPost(posts.map(post => 
      post.id === id ? {...post, isEdited: true} : post
    ));
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.text} {post.isEdited && "(edited)"}
            <button onClick={() => markAsEdited(post.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default App
