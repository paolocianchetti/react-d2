import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';
import BookCard from '../card/BookCard';
import Container from 'react-bootstrap/Container';
import { nanoid } from 'nanoid';

class LatestRelease extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="d-flex flex-wrap gap-4">
                        {this.props.fantasyBooks.map(book => (
                            <BookCard key={nanoid()}
                                img={book.img}
                                title={book.title}
                                category={book.category}
                                btn="Bottone"
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LatestRelease;