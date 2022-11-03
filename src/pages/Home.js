import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
            <h1>My Cool Home Page</h1>
            <Link to="/about/ian">MOVE TO ABOUT</Link>
        </>
        
    )
}

export default Home