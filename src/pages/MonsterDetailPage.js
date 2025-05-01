import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonsterByIndex } from '../features/monsters/monstersSlice';
import MonsterLargeCard from '../features/monsters/MonsterLargeCard';
import Loading from '../components/Loading';

export default function MonsterDetailPage() {
    const dispatch = useDispatch();
    const { index } = useParams();
    const navigate = useNavigate();
    const indexedMonsters = useSelector(state => state.monsters.indexedEntries);
    const status = useSelector(state => state.monsters.status); 

    useEffect(() => {
        if (!indexedMonsters || !indexedMonsters[index]) {
            dispatch(fetchMonsterByIndex(index))
        }
    }, [dispatch, index])
    
    if (status === 'loading') return <Loading />

    const monster = indexedMonsters[index]
    if (!monster) return <p>Monster not found.</p>;

    return ( 
        <main className="min-h-screen bg-gradient-to-br from-[#1b1b1b] to-[#2d1d32] py-10 px-6 md:px-12 text-white font-serif">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 text-lg font-semibold text-white bg-transparent border-2 border-transparent rounded-md transition-all duration-300 ease-in-out transform hover:bg-purple-800 hover:border-purple-600 hover:text-yellow-200 focus:outline-none shadow-md hover:shadow-xl"
                >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 opacity-30 blur-md group-hover:opacity-60 group-hover:blur-lg transition-all duration-300" />
                <span className="relative z-10 group-hover:text-yellow-200">Back</span>
                </button>

                {/* Monster Large Card */}
                <MonsterLargeCard monster={monster} />
            </div>
        </main> 
    );
}
