
import './App.css'

const PostImage = ({ url }) => {
  if (!url) {
    return (
      <div className="no-image" style={{ color: "gray" }}>
        No image available
      </div>
    );
  }

  return <img src={url} alt="Post Image" className="post-image" />;
};


function App() {
  return (
    <div className="app-container">
      <nav>Navbar</nav>
      <PostImage url="https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fcdn-imgix.headout.com%2Fmedia%2Fimages%2Fc9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg%3Fauto%3Dformat%26w%3D1222.3999999999999%26h%3D687.6%26q%3D90%26ar%3D16%253A9%26crop%3Dfaces%26fit%3Dcrop&imgrefurl=https%3A%2F%2Fwww.imgworldstickets.com%2Fimg-worlds-plan-your-visit%2F&docid=0ynKpGBOsdPJEM&tbnid=LCDzN4JCg3rfLM&vet=12ahUKEwjV84PAh-eSAxXl8qACHbBxGTQQnPAOegQIIxAB..i&w=1222&h=687&hcb=2&ved=2ahUKEwjV84PAh-eSAxXl8qACHbBxGTQQnPAOegQIIxAB" />
      <PostImage url="" />
      <footer>Footer</footer>
    </div>
  );
}

export default App
