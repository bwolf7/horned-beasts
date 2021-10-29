import { Component } from "react";
import HornedBeasts from "./HornedBeasts";

//Parent
class Main extends Component {
    render() {
        return (
            <>
                {this.props.beasts.map(element => <HornedBeasts beasts={this.props.beasts} showWin={this.props.showWin} {...element} />)}
            </>
        )
    }
}

export default Main



