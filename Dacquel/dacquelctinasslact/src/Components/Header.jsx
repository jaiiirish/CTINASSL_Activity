import background from './assets/bw-mountain.jpg'

function Header() {

    return(
        <>
        <div className="header">
            <header className="header-text"><b>๋࣭⭑ My Website ⭑.˚</b></header>
            <img className="header-image" src={background} alt="background image"></img>
        </div>
        <hr></hr>
        </>
    );

}

export default Header