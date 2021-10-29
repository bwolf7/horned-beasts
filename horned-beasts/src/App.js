import React, { Component } from 'react'
import Header from "./Header.js"
import Footer from "./Footer.js"
import Main from "./Main.js"
import SelectedBeasts from './SelectedBeasts.js'
import beasts from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from "react-bootstrap/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showBeasts: beasts,
    };
  }
  eventHandler = (e) => {
    let selection = e.target.value
    this.handleChange(selection)
  }

  handleChange = (selection) => {
    let hornCount = selection;
    let updatedHornArray;
    if (hornCount === "one") {
      updatedHornArray = beasts.filter((animal) => animal.horns === 1);
      this.setState({ showBeasts: updatedHornArray });
    } else if (hornCount === "two") {
      updatedHornArray = beasts.filter((animal) => animal.horns === 2);
      this.setState({ showBeasts: updatedHornArray });
    } else if (hornCount === "three") {
      updatedHornArray = beasts.filter((animal) => animal.horns >= 3);
      this.setState({ showBeasts: updatedHornArray });
    } else {
      this.setState({ showBeasts: beasts });
    }
  };


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
        <Form>
          <FloatingLabel label="How many Horns?">
            <Form.Select onChange={this.handleChange} aria-label="Default select example">
              <option value="all">All</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
            </Form.Select>
          </FloatingLabel>
        </Form>
        <Main showWin={this.showWin} beasts={beasts} />
        <Footer />
        <SelectedBeasts show={this.state.show} title={this.state.title} image={this.state.image} desc={this.state.desc} hideWin={this.hideWin} />
      </>
    )
  }
}