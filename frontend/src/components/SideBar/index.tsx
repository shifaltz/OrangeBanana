export default function SideBar() {
    return (
        <>
                <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

        <div className="hidden col-span-2 min-h-screen flex-row bg-gray-100 sm:hidden md:hidden lg:grid xl:grid shadow-md">
        <div className="flex flex-col w-full h-full bg-[#2C2C2C] overflow-hidden">
            <div className="flex items-center justify-center h-32">
                <h1 className="text-xl font-bold text-[#ED9121] font-['Inter']">Orange Juice Events</h1>
            </div>
            <ul className="flex flex-col py-4">
            <li>
                <a href="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                <span className="text-sm font-medium">Todos os eventos </span>
                </a>
            </li>
            <li>
                <a href="/my-events" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                <span className="text-sm font-medium">Meus eventos</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                <span className="text-sm font-medium">Perfil</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
                <span className="text-sm font-medium">Notificações</span>
                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                <span className="text-sm font-medium">Logout</span>
                </a>
            </li>
            </ul>
        </div>
        </div>
        </>
    );
}