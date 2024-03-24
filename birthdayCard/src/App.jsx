
import { RecoilRoot, useSetRecoilState } from 'recoil'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import React, { Suspense } from 'react'
import { UsernameAtom } from './Username'
const BirthdayCards = React.lazy(() => import("./BirthdayCards"))

function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<BirthdayCardGenerator />}></Route>
          <Route path='/birthdayCards' element={<Suspense fallback={"loading..."}><BirthdayCards /></Suspense>}></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

function BirthdayCardGenerator() {
  const navigate = useNavigate()
  const setUsername = useSetRecoilState(UsernameAtom)

  function handleOnChange(value) {
    setUsername(value.target.value)
  }

  function handleKeyDown(event) {
    if (event.key == 'Enter') {
      event.preventDefault()
      navigateToBirthdayCards()
    }
  }

  function navigateToBirthdayCards() {
    navigate('/birthdayCards')
  }

  return<div id='parentDiv'>
    <div id='mainDiv'>
      <div id='heading'>Enter Your Name</div>
      <div><input id='name' type='text' placeholder='Enter your name' onChange={(e) => handleOnChange(e)} onKeyDown={handleKeyDown}></input></div>
      <div><button id='done' onClick={() => navigate("/birthdayCards")} >Done</button></div>
    </div>
  </div>
}

export default App
