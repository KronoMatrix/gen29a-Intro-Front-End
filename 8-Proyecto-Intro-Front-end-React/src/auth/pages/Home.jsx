import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import MainLayout from '../../movies/layout/MainLayout';

const Home = () => {

    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=3ce302271da4a1000763b026bd6d6a80'
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
        console.log(data);

    }

    useEffect(() => {
        getMovies()
    }, [])

     
    return (
       
        <MainLayout>
            <div>
            {
                movies.map(movie => (
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}></img>
                        <Typography >{movie.title}</Typography>
                    </div>

                ))
            }
            </div>
        </MainLayout>


   
    )
}

export default Home