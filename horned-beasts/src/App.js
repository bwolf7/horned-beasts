import React, { Component } from 'react'
import Header from "./Header.js"
import Footer from "./Footer.js"
import Main from "./Main.js"
import SelectedBeasts from './SelectedBeasts.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data.json'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      image: "",
      desc: ""
    };
  }

  showWin = (titlePara, image_url, description) => {
    this.setState({ show: true, title: titlePara, image: image_url, desc: description });
  }

  hideWin = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <>
        <Header />
        <Main showWin={this.showWin} data={data} />
        <Footer />
        <SelectedBeasts show={this.state.show} title={this.state.title} image={this.state.image} desc={this.state.desc} hideWin={this.hideWin} />
      </>
    )
  }
}