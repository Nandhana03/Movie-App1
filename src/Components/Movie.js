import React,{useState} from 'react'
import Counter from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardActions, CardContent } from '@mui/material';

// import movieList from './MovieList';
export default function Movie({movieTake, getMovies}) {
   
   
  const ratingStyles={
     color: movieTake.rating>=8.5 ? "green" : "red"
  }
  const [show,setShow]=useState(true);
  const navigate=useNavigate();

  const deleteMovie = (id)=>(
      fetch(`https://65f16b84034bdbecc7627090.mockapi.io/movie/${id}`,{
        method : "DELETE",
      })
      .then(()=>getMovies())
      .then(()=>alert("Are you sure of deleting this card??"))
  );

  return (
    <Card className="movie-container">
        <img className="movie-poster" src={movieTake.poster} alt="movie poster"/>
        <CardContent>
        <div className="movie-spec">
             <h2 className="movie-name">{movieTake.name}
               <IconButton color="primary" aria-label="Toggle-Description" onClick={()=> setShow(!show)}>
                   {show ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
              </IconButton> 
              
              <IconButton color="primary" aria-label="Movie-Info" onClick={()=> navigate(`/portal/view/${movieTake.id}`)}>
                  <InfoIcon fontSize="medium" />
              </IconButton>
              </h2>
             <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
        </div>
        </CardContent>
        {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
        <CardActions>
           <Counter/>
           <IconButton
              sx={{marginLeft:"auto"}}
              aria-label="editMovie"
              onClick={()=>navigate(`/portal/edit/${movieTake.id}`)}
          >
            <EditIcon color="secondary"/>
          </IconButton>
          <IconButton
              sx={{marginLeft:"auto"}}
              aria-label="deleteMovie"
              onClick={()=>deleteMovie(movieTake.id)}
          >
            <DeleteIcon color="secondary"/>
          </IconButton>
        </CardActions>
    </Card>
  )
}
