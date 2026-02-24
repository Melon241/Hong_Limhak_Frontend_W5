import './App.css'

const Layout = ({ children}) => {
  return (
    <div className="app-container">
      <nav>Navbar</nav>
      {children}
      <footer>Footer</footer>
    </div>
  )
}

function App() {
  return (
    <Layout>
      <h2>Hello from App!</h2>
      <h2>Hallooooooo</h2>
    </Layout>
  )
}

export default App
