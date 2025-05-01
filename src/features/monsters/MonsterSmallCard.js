import { Link } from 'react-router-dom';

export default function MonsterSmallCard({ monster }) {

    return (
        <Link
            to={`/monsters/${monster.index}`}
            className="block bg-white rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition-all p-5 border border-gray-100"
            >
            <h2 className="text-xl font-semibold text-gray-800">{monster.name}</h2>
        </Link>
    )
}