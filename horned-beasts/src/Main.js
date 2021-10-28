import { Component } from "react";
import HornedBeasts from "./HornedBeasts";

//Parent
class Main extends Component {
    render() {
        return (
            <>
                {this.props.data.map(element => <HornedBeasts showWin={this.props.showWin} {...element} />)}
            </>
        )
    }
}

export default Main



