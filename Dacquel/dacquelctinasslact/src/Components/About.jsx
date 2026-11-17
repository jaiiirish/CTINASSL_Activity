import profilepic from './assets/Dacquel_2024-1009694_IDP.jpg'
import react from './assets/react.jpg'
import game from './assets/spiritcrossing.jpg'

function About() {
    return(
        <>
        <div className="about-header">
            <header>About</header>
        </div>
        <div className="card">
            <img className="card-image" src={profilepic} alt="Profile Picture"></img>
            <h2 className="card-title">Jairish Dacquel</h2>
            <p className="card-text">I study in National University as a BSIT-MAA student.</p>
        </div>
        <div className="card">
            <img className="card-image" src={react} alt="React"></img>
            <h2 className="card-title">React</h2>
            <p className="card-text">The JavaScript library I am currently learning for school.</p>
        </div>
        <div className="card">
            <img className="card-image" src={game} alt="Game"></img>
            <h2 className="card-title">Spirit Crossing</h2>
            <p className="card-text">My current favorite game that I spent hours on playing.</p>
        </div>
        <hr></hr>
        </>
    );
}

export default About