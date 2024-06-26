import './Header.css'

function App() {
  return (
    <>
      <header>
        <h1 className="logo">Wano<span>Kuni</span>.</h1>
        <div className="navbar">
          <ul><a href="Act1" className="links">ACT 1</a></ul>
          <ul><a href="Act2" className="links">ACT 2</a></ul>
          <ul><a href="Act3" className="links">ACT 3</a></ul>
        </div>
        <button className="code">Code</button>
      </header>
    </>
  )
}

export default App
