import React from 'react';
import {useParams,useNavigate} from'react-router-dom';
import Button from 'react-bootstrap/Button';
function DescriptionItems({films}) {
    const getId=useParams();
    const navigate=useNavigate();
    const foundMovies=films.find((el)=>el.id==getId.id);
    const handleNavigate=()=>{
        navigate('/');
    }
  return (
    <div style={{textAlign:"center",paddingTop:"300px"}}>
     <h1>{foundMovies.title}</h1>
     <h1>{foundMovies.Bande_annonce}</h1>
     <div style={{textAlign:"center",paddingTop:"40px"}}> 
         <Button variant="primary"onClick={handleNavigate}>Back to initial page</Button>
     </div>
    
    </div>
  )
}

export default DescriptionItems
