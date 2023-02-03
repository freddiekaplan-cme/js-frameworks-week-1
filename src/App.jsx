import React, { useState } from 'react'
import japan from './assets/japan.jpg'
import billboard from './assets/billboard.webp'
import './App.css'

function getActiveClassName (activeArticle, currentArticle) {
  if (activeArticle === currentArticle) {
    return 'show-article'
  } else {
    return 'hide-article'
  }
}

function App() {
  const [activeArticle, setActiveArticle] = useState('First Article')

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React Week 1</h1>
        </header>
        <main>

        <div className="buttons">
            <button onClick={() => {
              setActiveArticle((a) => {
                if (a === 'First Article') {
                  return 'Second Article'
                }
                else if (a === 'Second Article') {
                  return 'Third Article'
                }
                  else if (a === 'Third Article') {
                    return 'First Article'
                } else {
                  return 'First Article'
                }
              })
            }}>Switch Article</button>
              {/* <button onClick={() => {
                
                getActiveArticle(() => {
                return "show-article"
                })
                
          }}>All Articles</button> */}
          </div>

          <article className={`article, first-article, ${getActiveClassName(activeArticle, 'First Article')}`} >
             <h2>About Me</h2>
             <p>I'm learning web development. So far I've worked with HTML5 CSS3, JavaScript and jQuery. Excited to get into React and other js frameworks.</p>
             <img className='article-pic' src={japan} />
           </article>
           <article className={`article, second-article, ${getActiveClassName(activeArticle, 'Second Article')}`} >
             <h2>Project for Week 1</h2>
             <p>My first personal project is a name generator. Click a buttton and it will give you a random name from two-three arrays.</p>
             <div className="figures">
              <div className="figure">Array 1</div>
              <div className="figure">Array 2</div>
              <div className="figure">= Random Name</div>
             </div>
           </article>
           <article className={`article, third-article, ${getActiveClassName(activeArticle, 'Third Article')}`} >
             <h2>Design</h2>
             <p>I picked <a href="https://dribbble.com/shots/17117044-Free-Big-City-Billboard-Mockup">this design</a>. Mostly because I think I can pull it off and it alos suits the theme I'm going for with the name generator.</p>
             <img className='article-pic' src={billboard} />
          </article>
        
        </main>
      </div>
    </>
  )
}

export default App
