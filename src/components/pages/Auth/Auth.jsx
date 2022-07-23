import React from 'react'

const Auth = ({currentLogin, handleLogout}) => {
  return (
    <div>
      {/* Create header menu navigation in Auth Page*/}
      <header>
        <div className='wrapper-header'>
          <div className='wrapper-header-contents'>
            <h2 onClick={() => window.location.assign("http://localhost:3000")}>logo</h2>
            <div className='wrapper-header-string-contents'>
              <p onClick={() => window.location.assign("http://localhost:3000/contact")}>Контакты</p>
              <button type='button' onClick={handleLogout}>Выйти</button>
            </div>
          </div>
        </div>
        </header>
        {/* Create main contents in Auth Page*/}
        <main className='main'>
          <div className='wrapper-main'>
            <div className='wrapper-main-contents'>
              <h1>Привет, {currentLogin?.email}</h1>
              <div className='wrapper-main-buttons'>
                <button type='button' onClick={handleLogout}>Выйти из аккаунта</button>
                <button type='button' onClick={() =>window.location.assign("http://localhost:3000/contact") }>Перейти в контакты</button>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Auth