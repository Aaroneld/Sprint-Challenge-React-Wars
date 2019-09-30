import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.li`

    text-decoration: none;
    font-size: 75%;
    text-align: left;
    line-height: 30px;
    list-style-type: none;
`;


function FilmList (props) {

    const [data, setData] = useState([]);
    const [film, setFilm] = useState(props.films);

    useEffect (() => {
    
        const getInfo = () => {axios.get(film)
        .then( response => {
          console.log(response);
          setData(response["data"]);
        })
        .catch(error => {
          console.log(error);
        })}
    
        getInfo();
        
      }, []);

      console.log(film);

   return ( <List>{data["title"]}</List> );
}

export default FilmList;