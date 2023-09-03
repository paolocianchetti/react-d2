import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class BookCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.category}
                    </Card.Text>
                    <Button variant="primary">
                        {this.props.btn}
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default BookCard;
