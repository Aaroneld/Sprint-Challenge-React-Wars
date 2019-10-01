import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from "styled-components";
import './App.css';
import CharacterList from "./characterlist";

const CharContainer = styled.div`

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 5%;
`;

const Appl = styled.div`

  text-align: center;
  margin: 5%;
`;

const Heading = styled.h1`

color: #443e3e;
text-shadow: 1px 1px 5px #fff;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  const [render, setRender] = useState(0);

  useEffect (() => {
    
    const getInfo = () => {axios.get("https://swapi.co/api/people")
    .then( response => {
      console.log(response);
      setData(response["data"]["results"]);
    })
    .catch(error => {
      console.log(error);
    })}

    getInfo();
    
  }, []);
  
  console.log(data);
  
  // birth_year: "19BBY"
  // created: "2014-12-09T13:50:51.644000Z"
  // edited: "2014-12-20T21:17:56.891000Z"
  // eye_color: "blue"
  // films: (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
  // gender: "male"
  // hair_color: "blond"
  // height: "172"
  // homeworld: "https://swapi.co/api/planets/1/"
  // mass: "77"
  // name: "Luke Skywalker"
  // skin_color: "fair"
  
  return (
    <div className="App">
        <Heading>React Wars</Heading>
      
      <CharContainer>
        {data.map(items => <CharacterList name ={items["name"]} eyes={items["eye_color"]} gender={items["gender"]}
        birthDate={items["birth_year"]} weight={items["mass"]} hair={items["hair_color"]} films={items["films"]}
        height={items["height"]} /> )}
      </CharContainer>
    </div>
  );
}

export default App;
