import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonsters } from '../features/monsters/monstersSlice';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MonsterSmallCard from '../features/monsters/MonsterSmallCard';

export default function MonstersListPage() {
  const dispatch = useDispatch();
  const monsters = useSelector(state => state.monsters.entries);
  const status = useSelector(state => state.monsters.status);

  useEffect(() => {
    if (Object.values(monsters).length === 0) {
        dispatch(fetchMonsters())
    }
  }, [dispatch, monsters]);

  if (status === 'loading') return <Loading />

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1b1b1b] to-[#2d1d32] py-10 px-6 md:px-12 text-white font-serif">
        <div className="max-w-7xl mx-auto">
            {/* Title with mystical and bold text */}
            <h1 className="text-5xl font-bold text-yellow-100 mb-12 text-center drop-shadow-lg tracking-widest">
            📖 Arcane Bestiary
            </h1>

            {/* Grid Section with Mystical Monster Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.values(monsters).map((monster) => (
                    <MonsterSmallCard key={monster.index} monster={monster} />
                ))}
            </section>
        </div>
    </main>
  );
}
