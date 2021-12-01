import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h2>About Us</h2>
        <p>
          Only the best espresso coffee beans here! You know you need them!
        </p>
      </main>
    </>
  );
}