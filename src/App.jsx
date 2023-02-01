import './App.css'

function App() {
  return (

    <div className="App">

      <header className="App-header">
       <h1>React Week 1</h1>
      </header>

      <main>
        <article className="article-1">
          <h2>About Me</h2>
          <p>I'm learning web development. So far I've worked with HTML5 CSS3, JavaScript and jQuery. Excited to get into React and other js frameworks.</p>
          <div className="figure-1"></div>
        </article>
        <article className="article-2">
          <h2>Project for Week 1</h2>
          <p>My first personal project is ...</p>
          <div className="figure-2"></div>
        </article>
        <article className="article-3">
          <h2>Design</h2>
          <p>I picked this design because ...</p>
      </article>
      
      <div className="buttons">
        <button >
          Next Article
        </button>
        <button>
          All Articles
        </button>
      </div>

      </main>

    </div>
  )
}

export default App
