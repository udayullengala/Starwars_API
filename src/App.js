
import './App.css';
import React from 'react';
import StartWars from './StarWars';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StartWars />
      </header>
    </div>
  );
}

export default App;
// class FilmItemRow extends React.Component{
//   render() {
//     return(
//       <li>
//         <a href={this.props.url}>{this.props.url}</a>
//       </li>
//     )
//   }
// }

// class StarWars extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       loaded: false,
//       name: null,
//       height: null,
//       films: [],
//       image: [],
//     }
//   }

//   getCharacter() {
//     const randomNumber = Math.round(Math.random() * 82)
//     const url = `https://swapi.dev/api/people/${randomNumber}`
//     fetch (url)
//     .then(response => response.json())
//     .then(data => {
//         this.setState({
//         name: data.name,
//         height: data.height,
//         films: data.films,
//         loaded: true
//       })
//       console.log(data)
//     })



//   }

//   render() {

//     const movies = this.state.films.map((url,i) => {
//       return <FilmItemRow key={i} url={url}/>
//     })


//     return(
//       <div>
//         {
//           this.state.loaded &&
//           <div>
//             <h1>{this.state.name}</h1>
//             <h1>{this.state.height} in (cm)</h1>
//             <ul>
//               {movies}
//             </ul>
//           </div>
//         }

//         <button type='button' onClick={() => this.getCharacter()} className='btn'>Click Me</button>

//       </div>
//     )
//   }
// }

