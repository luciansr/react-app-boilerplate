import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Editor from '../shared/editor/Editor';

class Page1 extends Component {
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
                        <Col><Button>Teste</Button></Col>
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

            </div>
        );
    }
}

export default Page1;
