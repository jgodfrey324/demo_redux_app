import { Link } from 'react-router-dom';

export default function MonsterSmallCard({ monster }) {

    return (
        <main className="">
            <Link
                to={`/monsters/${monster.index}`}
                className="group relative block rounded-xl p-6 border-4 border-purple-800 bg-gradient-to-br from-[#f3e9dc] to-[#e7d6ba] shadow-[0_0_15px_rgba(183,135,255,0.2)] hover:shadow-[0_0_25px_rgba(255,220,128,0.6)] hover:scale-105 transition-all duration-300 transform cursor-pointer"
                >
                {/* Monster Name */}
                <h2 className="text-2xl font-extrabold text-purple-900 group-hover:text-red-800 tracking-wide text-center drop-shadow-md">
                    {monster.name}
                </h2>

                {/* Decorative underline */}
                <div className="mt-4 h-1 w-16 mx-auto bg-purple-800 rounded group-hover:bg-red-800 transition-colors" />

                {/* Tooltip or subtext */}
                <p className="mt-3 text-sm text-center text-gray-700 italic">
                    Tap to view details...
                </p>

                {/* Floating sparkle emoji or arcane glyph */}
                <div className="absolute top-2 right-2 text-yellow-700 text-xl group-hover:animate-pulse">
                    ✨
                </div>
            </Link>
        </main>
    )
}