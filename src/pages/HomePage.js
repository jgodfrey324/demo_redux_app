import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome to Monsterpedia</h1>
      <Link to="/monsters">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go to Monsters List
        </button>
      </Link>
    </div>
  );
}