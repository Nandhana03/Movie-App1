import React,{useEffect,useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Button} from '@mui/material';
export default function MovieDetails() {
    const { id } =useParams(); 

    const [movie,setMovie]=useState([]);

    useEffect(()=>
    {
        fetch(`https://65f16b84034bdbecc7627090.mockapi.io/movie/${id}`,{
            method:"GET"
        })
        .then((data)=>data.json())
        .then((mv)=>setMovie(mv));
    },[]);
    // console.log(movie);
    const ratingStyles={
        color: movie.rating>=8.5 ? "green" : "red"
     }
     const navigate=useNavigate();
  return (
    <div>
        <iframe width="640" height="360" src="https://www.youtube.com/embed/CS0XfdRCUhk" title="Salaam Venky - Official Trailer | Kajol | Vishal Jethwa | Aamir Khan | Revathy | 9th Dec 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="movie-detail-container">
            <div className="movie-spec">
                <h2 className="movie-name">{movie.name}</h2>
                <h3 style={ratingStyles} className="movie-rating">⭐{movie.rating}</h3>
            </div>
            <p className="movie-summary">{movie.summary}</p>
        </div>
        <Button variants="contained" startIcon={<ArrowBackIosIcon/>} onClick={()=>navigate(-1)}>Back</Button>
    </div>
  )
}
