import { Component } from "react";

class Creature extends Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <img src={this.props.image_Url} alt="Pic" />
            </>
        )
    }
}

export default Creature;