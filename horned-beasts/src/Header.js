import { Component } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
                        <Nav className="me-auto">
                            <div id="buttons">
                                <Button>Home</Button>
                                <Button id="b2">Gallery</Button>
                                <Button>About</Button>
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header