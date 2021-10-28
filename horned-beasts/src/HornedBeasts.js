import { Component } from "react";
import Button from "react-bootstrap/Button";


class HornedBeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickedFavorite: 0
        }
    }
    handleClick = () => {
        this.setState({ clickedFavorite: this.state.clickedFavorite + 1 })
    }

    render() {
        return (
            <>
                <div id="card">
                    <h2>{this.props.title}</h2>
                    <img src={this.props.image_url} alt="Pic" onClick={this.handleClick} />
                    <p> ♥ {this.state.clickedFavorite} </p>
                    <p id="dis">{this.props.description}</p>
                    <p>A {this.props.keyword} with {this.props.horns} horn(s)!</p>
                    <Button onClick={() => this.props.showWin(this.props.title, this.props.image_url, this.props.description)}>More</Button>
                </div>
            </>
        )
    }
}

export default HornedBeasts;