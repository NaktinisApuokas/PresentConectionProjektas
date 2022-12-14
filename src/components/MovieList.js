import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routes from '../constants/routes';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import EditButton from "./EditButton";

export default function MoviesList(){
    const [isLoading, setLoading] = useState(true);
    const [movies, setData] = useState([]);
    const id = useLocation().state.type;
    const url = routes + '/cinemas/' + id + "/movies";
    const delete_url = url +'/';

    useEffect(() => {
      async function getData(url) {
        const getData = await axios.get(url);
        setData(getData.data);
      }
      getData(url);
      setLoading(false);
    }, [isLoading]);
  
    if (isLoading) {
      return <div className='mb-3 p-5 text-center bg-light'>Loading...</div>;
    }

    if(movies.length > 0)
        return (
        <div className='p-5 text-center bg-light'> <Link to="/add_movie" state={{ type:id}}><button className="btn btn-dark btn-lg w-40"> Add Movie </button></Link>
        <MDBTable>
            <MDBTableHead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
            {movies.map((movie) => (
                <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td><Link to= {"/screenings"} style={{ textDecoration: 'none', color: 'Black' }} state={{ type : id, movieid : movie.id}}> View Screening </Link></td>
                    <td>{EditButton({ type: id, movie : movie}, "/edit_movie")}</td>
                    <td>{DeleteButton(movie.id, delete_url)}</td>
                </tr>
                ))
            }
            </MDBTableBody>
        </MDBTable>
        </div> 
        );
    return (
    <div className='mb-3 p-5 text-center bg-light'> No movies
        <div className="mt-5">
            <Link to="/add_movie" state={{ type:id}}><button className="btn btn-dark btn-lg w-40"> Add Movie </button></Link>
        </div>
    </div> );
}
  