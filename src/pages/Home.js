import { Outlet, Link } from "react-router-dom";

function Home() {
    return(
        <>
            <h1>Hello world!</h1>
            <h2><Link to="/CreateGame">Create a game</Link></h2>
        </>
    );
}

export default Home;