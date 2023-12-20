import React from "react";
import book from '../data/books.json'
import { Row, Container} from "react-bootstrap"
import SingleBook from "./SingleBook";

class BookList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: '' }
    }

    handleInputSearch = (valore) => {
        
    }

    render() {
        const {libriFiltrati} =this.state
        return (
            <Container>
                <Row>
                    {book.fantasy.map((libro) => {
                        return (
                            <SingleBook book={libro}/>
                        )

                    })}
                </Row>
            </Container>
        )
    }
}
export default BookList