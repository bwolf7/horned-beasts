import { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json"


class Main extends Component {
    render() {
        return (
            <>
                {data.map(element => <HornedBeasts {...element} />)}
            </>
        )
    }
}

export default Main



