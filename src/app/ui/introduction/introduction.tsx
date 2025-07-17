
interface IntroductionProps {
    onViewProjectsClick: () => void;
}

export default function Introduction({ onViewProjectsClick }: IntroductionProps) {
    return (
        <section className="min-h-screen w-3/4 flex flex-col items-center m-auto">
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Hi, I&#39;m Abdurazak Abrar</h2>
                <p>Senior Software Engineer | Flutter & Fullstack Specialist</p>
                <span className='w-screen block mt-10'>I design and develop intuitive, high-performance applications that simplify financial processes, enhance user experiences, and deliver clean, mobile-friendly UI across platforms.</span>
                <div className="flex gap-4 mt-6 justify-center"> <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-blue-700 transition" onClick={onViewProjectsClick}> 🚀 View Projects </button> <a href='https://docs.google.com/document/d/1lsQFVyaCYpq5GBGiI16yPXYpUPTgJzPI/export?format=pdf'>
                    <button className="border px-6 py-2 rounded-full font-semibold hover:bg-gray-100 cursor-pointer transition"> ⬇️ Download Resume </button>
                </a></div>
            </div>
        </section>
    );
}
