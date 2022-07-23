import React, { useState,useRef, createContext } from 'react'
import { useForm } from "react-hook-form";
import './Main.css'

const Main = ({loginRef,passwordRef, handleSignup}) => {
  const [modalWindow,setModalWindow] = useState(false);
  const [closeModalWindow,setCloseModalWindow] = useState(false);
  const {
    register,
    formState:{ errors },
    handleSubmit,
    reset
  } = useForm({mode: "onBlur"});

  const onSubmit = () => {
    reset();
  };
  return (
    <div>
        {/* Create header menu navigation*/}
        <header>
        <div className='wrapper-header'>
          <div className='wrapper-header-contents'>
            <h2>logo</h2>
            <div className='wrapper-header-string-contents'>
              <p onClick={() => window.location.assign("http://localhost:3000/contact")}>Контакты</p>
              <button type='button' onClick={() => {
                setModalWindow(!modalWindow)
                setCloseModalWindow(!closeModalWindow)
                }}>Войти</button>
            </div>
          </div>
        </div>
        </header>
        {/* Create main contents*/}
        <main className='main'>
          <div className='wrapper-main'>
            <div className='wrapper-main-contents'>
              <h1>Место для получения <br /> медицинской помощи</h1>
              <div className='wrapper-main-buttons'>
                <button type='button' onClick={() => {
                    setCloseModalWindow(!closeModalWindow)
                    setModalWindow(!modalWindow)
                }}>Войти</button>
                <button type='button' onClick={() => window.location.assign("http://localhost:3000/contact")}>Контакты</button>
              </div>
            </div>
          </div>
        </main>
        {/* Create help card */}
        <section className='wrapper-card'>
          <div className='wrapper-card-background'>
            <div className='wrapper-card-contents'>
              <div className='wrapper-card-images-one' />
              <h2>Онлайн-прием</h2>
              <div className='wrapper-card-border-bottom' />
              <p>Рыба текст</p>
            </div>
          </div>
          <div className='wrapper-card-background'>
            <div className='wrapper-card-contents'>
              <div className='wrapper-card-images-two' />
              <h2>Онлайн-прием</h2>
              <div className='wrapper-card-border-bottom' />
              <p>Рыба текст</p>
            </div>
          </div>
          <div className='wrapper-card-background'>
            <div className='wrapper-card-contents'>
              <div className='wrapper-card-images-three' />
              <h2>Онлайн-прием</h2>
              <div className='wrapper-card-border-bottom' />
              <p>Рыба текст</p>
            </div>
          </div>
        </section>
        {/* Modal Window */}
        <section>
          {modalWindow ? (
            <div>
              <div className="modal">
                  <div className='wrapper-modal-window'>
                    <div className='button-close-modal-window'>
                      <button type='button' onClick={() => {
                        setCloseModalWindow(!closeModalWindow)
                        setModalWindow(!modalWindow)
                      }}>X</button>
                    </div>
                    <h1>Авторизация</h1>
                    <div onSubmit={handleSubmit(onSubmit)} className="wrapper-modal-form">
                      <input
                        type="text"
                        placeholder="Login"
                        {...register('login', {required: "Это поле обязательное к заполнению!"})}
                        ref={loginRef}
                        />
                        <div className='wrapper-errors-text-validation'>
                          {errors?.login && <p>{errors?.login?.message}</p>}
                        </div>
                      <input
                        type="password"
                        placeholder="Password"
                        {...register('pass', {required: "Это поле обязательное к заполнению!"})}
                        ref={passwordRef}
                      />
                        <div className='wrapper-errors-text-validation'>
                          {errors?.pass && <p>{errors?.pass?.message}</p>}
                        </div>
                      <input
                        type='submit'
                        value="Войти"
                        className='input-button'
                        onClick={() => {
                          handleSignup()
                          }}/>
                    </div>
                  </div>
              </div>
            </div>
          ) : <div/>}
        </section>
    </div>
  )
}

export default Main