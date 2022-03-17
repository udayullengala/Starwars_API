import React from "react";
import "./StarWars.css";

class StarWars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterLoaded: false,
      name: null,
      height: null,
      imageUrl: null,
    };
  }

  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88);
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`;
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        this.setState({
          characterLoaded: true,
          name: data.name,
          height: data.height,
          imageUrl: data.image,
        });
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <div className="content">
          {this.state.characterLoaded && (
            <div>
              <h2>Name : {this.state.name}</h2>
              <h2>Height : {this.state.height}m</h2>
              <p>
                <img
                  src={this.state.imageUrl}
                  className="img"
                  alt={this.state.name}
                ></img>
              </p>
            </div>
          )}
          <button
            type="button"
            onClick={() => this.getNewCharacter()}
            className="btn"
          >
            Randomize Character
          </button>
        </div>
      </div>
    );
  }
}

export default StarWars;
