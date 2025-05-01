import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonsterByIndex } from '../features/monsters/monstersSlice';

export default function MonsterDetailPage() {
    const dispatch = useDispatch();
    const { index } = useParams();
    const navigate = useNavigate();
    const indexedMonsters = useSelector(state => state.monsters.indexedEntries);
    const status = useSelector(state => state.monsters.status); 
    const [imageLoading, setImageLoading] = useState(true); 

    useEffect(() => {
        console.log('use effect called')
        if (!indexedMonsters || !indexedMonsters[index]) {
            console.log('dispatch ran ')
            dispatch(fetchMonsterByIndex(index))
        }
    }, [dispatch, index])
    
    if (status === 'loading' || !indexedMonsters) return <p>Loading...</p>

    const monster = indexedMonsters[index]
    if (!monster) return <p>Monster not found.</p>;

    const monsterActions = monster.actions.map(action => action.name).join(", ")


    return (
        <main>
            <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
                Back
            </button>

            <div className="bg-white rounded-lg shadow p-6 max-w-xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">{monster.name}</h2>
                <div className="mb-2 relative">
                {imageLoading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-10">
                        {/* Loading Spinner */}
                        <svg className="w-10 h-10 text-gray-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 118 8 8 8 0 01-8-8z"></path>
                        </svg>
                    </div>
                )}
                
                {/* Placeholder image for now */}
                <img
                    src={`https://www.dnd5eapi.co${monster.image}`}
                    alt={`Illustration of ${monster.name}`}
                    width={600}
                    height={400}
                    className="rounded object-cover"
                    onLoad={() => setImageLoading(false)}
                />
                </div>
                <p className="italic text-gray-700 mb-6">Actions can perform: {monsterActions}</p>
                <section className='grid grid-cols-2 gap-2'>
                <div className="col-span-1">
                    <div><strong>Size:</strong> {monster.size}</div>
                    <div><strong>Type:</strong> {monster.type}</div>
                    <div><strong>Alignment:</strong> {monster.alignment}</div>
                    <div><strong>Languages:</strong> {monster.languages}</div>
                    <div><strong>HP:</strong> {monster.hit_points}</div>
                    <div><strong>XP:</strong> {monster.xp ?? 'N/A'}</div>
                </div>
                <div className="col-span-1">
                    <div><strong>Challenge Rating:</strong> {monster.challenge_rating}</div>
                    <div><strong>Strength:</strong> {monster.strength}</div>
                    <div><strong>Dexterity:</strong> {monster.dexterity}</div>
                    <div><strong>Constitution:</strong> {monster.constitution}</div>
                    <div><strong>Intelligence:</strong> {monster.intelligence}</div>
                    <div><strong>Wisdom:</strong> {monster.wisdom}</div>
                    <div><strong>Charisma:</strong> {monster.charisma}</div>
                </div>
                </section>
            </div>
        </main>  
    );
}
