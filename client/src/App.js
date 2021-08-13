import './App.css'
import React from 'react'
import { Router,useState } from '@reach/router'
import Chat from './chatfolder/Chat'
import Origin from './Original'

import Main from './productFolder/Main'
import Detail from './productFolder/Detail'
import Update from './productFolder/Update'

import MainAuthor from './authorFolder/Main'
import DetailAuthor from './authorFolder/Detail'
import UpdateAuthor from './authorFolder/Update'

import LalaChat from './chatfolder/LalaChat'
import About from './association/About'

import {FooterContainer} from './container/footer'
function App() {
  const [name] = useState("asd")

  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="product/:id" />
        <Update path="product/:id/edit" />

        <MainAuthor path="/author" />
        <DetailAuthor path="author/:id" />
        <UpdateAuthor path="author/:id/edit" />

        <Chat path="/chat" />
        <LalaChat path="/lala" name={name} />

        <About path = "/about" />
      </Router>

      <h3>End Main XxX</h3>
      <Origin />
      return{
        <>
        <FooterContainer />
        </>
      }
    </div>
  );
}

export default App;