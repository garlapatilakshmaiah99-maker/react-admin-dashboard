import Navbar from "../components/Navbar";

function Home() {
    return (
        <div>
            <Navbar />

            <div className="page">
                <h1>Home Page</h1>
                <p>Welcome to our React website.</p>
            </div>
        </div>
    );
}

export default Home;