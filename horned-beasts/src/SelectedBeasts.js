import { Component } from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Figure from "react-bootstrap/Figure";

//Child of Main.js

class SelectedBeasts extends Component {

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.hideWin}>
                    <Modal.Header>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Figure>
                            <Figure.Image src={this.props.image} className='img'></Figure.Image>
                            <Figure.Caption>{this.props.desc}</Figure.Caption>
                        </Figure>
                    </Modal.Body>
                    <Button onClick={this.props.hideWin}>Close</Button>
                </Modal>
            </>
        )
    }
}

export default SelectedBeasts