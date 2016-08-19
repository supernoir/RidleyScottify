
import React from 'react';
import ReactDOM from 'react-dom';

const title = [
    "Space", "Rocket", "Blade", "Dark", "Robot", "Zombie", "Psycho", "Holo", "Alien"
]

const subtitle = [
    "Racer", "Avenger", "Crimes", "Rebel", "Virus", "Wars", "Attack", "Orbit"
]

const slogan = [
    "You gotta run!", "They will get you!", "It will never be the same!", "A darker future awaits...", "Out of reach, out of time.", "You're in grave Danger!", "Earth has gone mad!", "Only he can save them!"
]

let getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class RidleyScottify extends React.Component{
    render(){
        return <div>
        <h1>{ title[getRandom(0,8)] }</h1>
        <h2>{ subtitle[getRandom(0,7)] }</h2>
        <h3>{ slogan[getRandom(0,7)] }</h3>
        </div>
    }

}

ReactDOM.render(
    <RidleyScottify />,
    document.getElementById('app')
);