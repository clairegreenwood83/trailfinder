import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main id="not-found-content">
			<h1>404</h1>
			<h2>Trail not found</h2>
			<p>The page you're looking for doesn't exist.</p>

			<div className="not-found__footer">
        <Link className="text-link" to="/">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}

export default NotFound;