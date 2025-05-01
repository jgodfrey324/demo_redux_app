export default function Loading() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1b1b1b] to-[#2d1d32] flex items-center justify-center">
          <div className="relative">
            {/* Glowing Magic Circles */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 opacity-40 blur-2xl animate-pulse rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 opacity-30 blur-3xl animate-pulse-reverse rounded-full" />
            
            {/* Loading Spinner */}
            <svg
              className="w-24 h-24 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-spin-slow"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 118 8 8 8 0 01-8-8z"
              ></path>
            </svg>
    
            {/* Glowing Text */}
            <div className="mt-4 text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-pulse">
              Summoning Monsters...
            </div>
          </div>
        </div>
    );
}
