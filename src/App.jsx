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
   } else {
     return 'hide-article'
    }
}

function App() {
  const [activeArticle, setActiveArticle] = useState('First Article')

  const [buttonText, setButtonText] = useState("Next Article: My Project");

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React Week 1</h1>
        </header>
        <main>
          <div className="buttons">

        {/*
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
          */}
      
            <button onClick={() => {

              setActiveArticle((a) => {
                if (a === 'First Article') {
                  setButtonText("Next Article: Project Design")
                  return 'Second Article'
                }
                else if (a === 'Second Article') {
                  setButtonText("Next Article: About Me")
                  return 'Third Article'
                }
                else if (a === 'Third Article') {
                    setButtonText("Next Article: My Project")
                    return 'First Article'
                } else {
                  setButtonText("Next Article: My Project")
                  return 'First Article'
                }
              })
            }}>
              
              {buttonText}

            </button>

             {/*  
            <button onClick={() => { 
                  setMyText("My Changed Text")}}>
               
                </button>
                
                getActiveArticle(() => {
                return "show-article"
                })
                
          }}>All Articles</button> */}
          </div>

          <article className={`${getActiveClassName(activeArticle, 'First Article')}`} >
             <h2>About Me</h2>
             <p>I'm learning web development. So far I've worked with HTML5 CSS3, JavaScript and jQuery. Excited to get into React and other js frameworks.</p>
             <img className='article-pic' src={japan} />
           </article>
           <article className={`${getActiveClassName(activeArticle, 'Second Article')}`} >
             <h2>Project for Week 1</h2>
             <p>My first personal project is a name generator. Click a buttton and it will give you a random name from two-three arrays.</p>
             <div className="figures">
              <div className="figure">Array 1</div>
              <div className="figure">Array 2</div>
              <div className="figure">= Random Name</div>
             </div>
           </article>
           <article className={`${getActiveClassName(activeArticle, 'Third Article')}`} >
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
