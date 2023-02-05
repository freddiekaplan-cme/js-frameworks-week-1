import React, { useState } from 'react'
import japan from './assets/japan.jpg'
import billboard from './assets/billboard.webp'
import './App.css'

function getActiveClassName (activeArticle, currentArticle) {
  if (activeArticle === currentArticle && activeArticle === 'First Article') {
    return 'show-article, article'
  }
  else if (activeArticle === currentArticle && activeArticle === 'Second Article') {
    return 'show-article, second-article'
   }
   else if (activeArticle === currentArticle && activeArticle === 'Third Article') {
    return 'show-article, third-article'
   }
   else if (activeArticle === 'All Articles') {
    return 'show-article, article'
   } else {
     return 'hide-element'
    }
}

function App() {
  const [title, setTitle] = useState('React Week 1: About Me')
  document.title = title
  const [activeArticle, setActiveArticle] = useState('First Article')
  const [buttonText, setButtonText] = useState('Next Article: My Project');
  const [buttonColor, setButtonColor] = useState('article');

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React Week 1</h1>
        </header>
        <main>
          <div className="buttons">

            <button className={`${buttonColor}`} onClick={() => {
              setActiveArticle((a) => {
                if (a === 'First Article') {
                  setTitle('React Week 1: My Project')
                  document.title = title
                  setButtonText("Next Article: Project Design")
                  setButtonColor('second-article')
                  return 'Second Article'
                }
                else if (a === 'Second Article') {
                  setTitle('React Week 1: Project Design')
                  document.title = title
                  setButtonText("Next Article: About Me")
                  setButtonColor('third-article')
                  return 'Third Article'
                }
                else if (a === 'Third Article') {
                  setTitle('React Week 1: About Me')
                  document.title = title
                  setButtonText("Next Article: My Project")
                  setButtonColor('article')
                  return 'First Article'
                } else {
                  setTitle('React Week 1: About Me')
                  document.title = title
                  setButtonText("Next Article: My Project")
                  setButtonColor('article')
                  return 'First Article'
                }
              })
            }}>             
              {buttonText}
            </button>

            <button onClick={() => {
              setActiveArticle('All Articles')
              setTitle('React Week 1: All Articles')
              document.title = title
              getActiveClassName(activeArticle, 'All Articles')
              setButtonText("Show One Article")
            }}>
              Show All Articles
            </button>

          </div>

          <article className={`${getActiveClassName(activeArticle, 'First Article')}`} >
             <h2>About Me</h2>
             <p>I'm learning web development. So far I've worked with HTML5 CSS3, JavaScript and jQuery. Excited to get into React and other js frameworks.</p>
             <img className='article-pic' src={japan} />
           </article>
           <article className={`${getActiveClassName(activeArticle, 'Second Article')}`} >
             <h2>My Project</h2>
             <p>My first personal project is a name generator. Click a buttton and it will give you a random name from two-three arrays.</p>
             <div className="figures">
              <div className="figure">Array 1</div>
              <div className="figure">Array 2</div>
              <div className="figure">= Random Name</div>
             </div>
           </article>
           <article className={`${getActiveClassName(activeArticle, 'Third Article')}`} >
             <h2>Project Design</h2>
             <p>I picked <a href="https://dribbble.com/shots/17117044-Free-Big-City-Billboard-Mockup">this design</a>. Mostly because I think I can pull it off and it alos suits the theme I'm going for with the name generator.</p>
             <img className='article-pic' src={billboard} />
          </article>
        
        </main>
      </div>
    </>
  )
}

export default App
