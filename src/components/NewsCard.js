import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import newsCard from './newsCard.css';

function NewsCard({ image, title, description, url }) {
    return (
        <>
            <Card className="card">
                <Card.Img variant="top" src={image} className='newsImg'/>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary" href={url} target="_blank" className='mt-auto'>
                        Read More
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default NewsCard;
