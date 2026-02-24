import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [newContent, SetnewContent] = useState('');

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      content: newContent
    };
    setPosts([...posts, newPost]);
    SetnewContent('');
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <input 
        type="text"
        value={newContent}
        onChange={(e) => SetnewContent(e.target.value)}
        placeholder="Write a new post..."
      />
      <button onClick={handleAddPost}>Add Post</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.content} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
