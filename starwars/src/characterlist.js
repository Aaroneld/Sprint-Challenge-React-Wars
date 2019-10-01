import React from 'react';
import FilmComponent from './filmcomponent';
import styled from 'styled-components';


function CharacterList (props) {

    // name ={items["name"]} eyes={items["eye-color"]} gender={items["gender"]}
    //   birthDate={items["birth_year"]} weight={items["mass"]} hair={items["height"]} films={items["films"]}
   const CharacterList = styled.div`
        text-align: center;
        flex-basis: 24%;
        background: white;
        margin: 2%;
        padding: 2%;
        opacity: .8;
        box-shadow: 10px 10px 5px #aaaaaa;
        border: 1px solid black;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
   `;

   const FilmDiv = styled.h3`

        background: black;
        color: white;
        opacity: .7;
        padding: 4%;
   `;

   const FilmList = styled.ul`


        text-decoration: none;
        font-size: 75%;
        padding: 0;
   `;

   const CharList = styled.ul`
   
        padding: 0;
   `;

   const CharItem = styled.li`

        text-align: left;
        font-weight: bold;
        line-height: 50px;
        list-style-position: inside;
        padding-left: 2%;
   `;

   const HeadingOne = styled.div`


        text-decoration: underline;
        text-align: center;
   `;

   const HeadingTwo = styled.h3`

        text-decoration: underline;
   `;
   
  return( 
  <>
    <CharacterList>

            
            <CharList>
                <HeadingOne>{props.name}</HeadingOne>
                <CharItem>Birth Year: {props.birthDate}</CharItem>
                <CharItem>Eye Color: {props.eyes}</CharItem>
                <CharItem>Hair Color: {props.hair}</CharItem>
                <CharItem>Gender: {props.gender}</CharItem>
                <CharItem>Height: {props.height}cm</CharItem>
                <CharItem>Weight: {props.weight}g</CharItem>
            </CharList>
            
            <FilmDiv>
                <HeadingTwo>Films</HeadingTwo>
                <FilmList>
                    {props.films.map((items) => <FilmComponent films={items} /> )}
                </FilmList>
            </FilmDiv>
        </CharacterList>
</> );

}

export default CharacterList;