import React, { Component } from 'react'
import Header from "./Header.js"
import Footer from "./Footer.js"
import Main from "./Main.js"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}