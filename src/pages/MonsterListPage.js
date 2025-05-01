import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonsters } from '../features/monsters/monstersSlice';
import { Link } from 'react-router-dom';

export default function MonstersListPage() {
  const dispatch = useDispatch();
  const monsters = useSelector(state => state.monsters.entries);
  const status = useSelector(state => state.monsters.status);

  useEffect(() => {
    if (Object.values(monsters).length === 0) {
        dispatch(fetchMonsters())
    }
  }, [dispatch, monsters]);

  if (status === 'loading') return (<p>Loading...</p>)

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Monster List</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.values(monsters).map((monster) => (
                <Link
                    to={`/monsters/${monster.index}`}
                    key={monster.index}
                    className="block bg-white rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition-all p-5 border border-gray-100"
                    >
                    <h2 className="text-xl font-semibold text-gray-800">{monster.name}</h2>
                </Link>
            ))}
        </section>
        </div>
    </main>
  );
}
