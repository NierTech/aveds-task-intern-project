import React from 'react'
import '../Main/Main.css'

const Contact = () => {
  return (
    <div>
       {/* Create header menu navigation in Contact Page*/}
       <header>
        <div className='wrapper-header'>
          <div className='wrapper-header-contents'>
            <h2 onClick={() => window.location.assign("http://localhost:3000")}>logo</h2>
            <div className='wrapper-header-string-contents'>
              <p onClick={() => window.location.assign("http://localhost:3000/contact")}>Контакты</p>
              <button type='button'>Выйти</button>
            </div>
          </div>
        </div>
        </header>
         {/* Create main contents in Contact Page*/}
        <main className='main'>
          <div className='wrapper-main'>
            <div className='wrapper-main-contents'>
              <h1>Контакты</h1>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Contact