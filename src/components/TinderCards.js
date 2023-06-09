import React from "react";
import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "../styles/TinderCards.css";
import axios from "../axios";
function TinderCards() {
  const people = [
    {
      name: "Alex Hales",
      imgUrl: "https://wallpapercave.com/wp/wp6749844.jpg",
    },
    {
      name: "Shahid Afridi",
      imgUrl:
        "https://reviewit.pk/wp-content/uploads/2020/10/fsdgsdg1-1-1024x724-1.jpg",
    },
  ];
  // useEffect(()=>{
  //     async function fetchData(){
  //         // const req = await axios.get('/tinder/cards');
  //         setPeople(req.data);
  //     }
  //     fetchData();
  // },[])

  const swiped = (direction, nameToDelete) => {
    console.log("removing " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left on the screen!");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
