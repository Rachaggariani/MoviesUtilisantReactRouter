import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
function CardMovies({Movie}) {
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate(`/ListMovies/${Movie.id}`);
  }
  
  return (
    <div style={{paddingTop:"3px",boxShadow:"10px 10px 10px gray"}}>
    <Card  onClick={handleNavigate} style={{ width: '19rem' }}>
    <Card.Img variant="top" src={Movie.poster} alt={`${Movie.title}`}/>
    <Card.Body>
      <Card.Title>{Movie.title}</Card.Title>
      <Card.Text>
        {Movie.decription}
      </Card.Text>
      <ReactStars count={5}
    size={24}
    activeColor="#ffd700"
    value={Movie.rate}
    edit={false}
  />
    </Card.Body>
  </Card>
  </div>
  )
}

export default CardMovies
