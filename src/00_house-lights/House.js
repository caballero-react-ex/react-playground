import React, { Component } from 'react';
import Room from './Room';

class House extends Component {

  state = {
    rooms: {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false
    }
  };

  toggle = room => {
    this.setState(prevState => ({
      rooms: {
        ...prevState.rooms, [room]: !prevState.rooms[room]
      }
    }));
  };



  

  goodNight = () => {
    this.setState({
      rooms: {
        kitchen: false, 
        bathroom: false, 
        livingRoom: false, 
        bedroom: false
      }
    });
  };
  
  render() {

    return (
      <div style={{backgroundColor: "OLDLACE", padding: "20px", marginTop: "20px"}}>
        I am a house
        <Room name={"Kitchen"} room={"kitchen"} toggle={this.toggle} state={this.state.rooms.kitchen} /> 
        <Room name={"Livingroom"} room={"livingRoom"} toggle={this.toggle} state={this.state.rooms.livingRoom} /> 
        <Room name={"Bedroom"} room={"bedroom"} toggle={this.toggle} state={this.state.rooms.bedroom} /> 
        <Room name={"Bathroom"} room={"bathroom"} toggle={this.toggle} state={this.state.rooms.bathroom} /> 
        <p 
          style={{backgroundColor: "darkgrey", padding: "30px"}}
          onClick={() => this.goodNight()}
        > 
          Good Night Button
        </p>
      </div>
    )
  }
}

export default House;