import './App.css'

const PostActions = ({ onLike, onShare}) => {
  return (
    <div>
      <button onClick = {onLike}>Like</button>
      <button onClick = {onShare}>Share</button>
    </div>
  )
}

function App() {
  const handleLike = () => {
    alert("You liked the post!");
  };

  const handleShare = () => {
    alert("You shared the post!");
  };
  
  return (
    <div className="app-container">
      <PostActions onLike={handleLike} onShare={handleShare} />
    </div>
  );
}

export default App
