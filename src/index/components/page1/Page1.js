import React, { Component } from 'react';
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Editor from '../shared/editor/Editor';

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {

        const page1ContainerStyle = {
            padding: 20
        };

        const page1FirstRowStyle = {
            paddingBottom: 10
        };

        var htmlCode =
            `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
`;
        return (
            <div style={page1ContainerStyle}>
                <Container>
                    <Row style={page1FirstRowStyle}>
                        <Col><Button onClick={this.toggle}>Visualizar</Button></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Editor language="json" code={`{ "teste" : "texto" }`}></Editor>
                        </Col>
                        <Col>
                            <Editor language="html" code={htmlCode}></Editor>
                        </Col>
                    </Row>
                </Container>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}

export default Page1;
