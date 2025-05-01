import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonsterByIndex } from '../features/monsters/monstersSlice';
import MonsterLargeCard from '../features/monsters/MonsterLargeCard';

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
    
    if (status === 'loading') return <p className="py-10 px-6 text-lg text-gray-500">Loading...</p>

    const monster = indexedMonsters[index]
    if (!monster) return <p>Monster not found.</p>;

    return (
        <main className="min-h-screen bg-gray-100 py-10 px-6 md:px-12">
            <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
                Back
            </button>
            <MonsterLargeCard monster={monster} />
        </main>  
    );
}
