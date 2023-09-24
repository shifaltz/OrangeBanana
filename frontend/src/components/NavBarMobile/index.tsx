function NavBarMobile() {

    return (
            
        <>
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#2C2C2C] border-t border-gray-200 lg:hidden xl:hidden">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                <button type="button" >
                    <a href="/my-events" className="inline-flex flex-col items-center justify-center px-5">
                        <svg className="w-6 h-6 mb-1 text-[#ED9121]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        <span className="text-sm text-[#ED9121]">Favoritos</span>
                    </a>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5">
                    <a href="/" className="inline-flex flex-col items-center justify-center px-5">
                        <svg className="w-6 h-6 mb-1 text-[#ED9121]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                        </svg>
                        <span className="text-sm text-[#ED9121]">Home</span>
                    </a>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5">
                    <a href="/" className="inline-flex flex-col items-center justify-center px-5">
                        <svg className="w-6 h-6 mb-1 text-[#ED9121]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                        </svg>
                        <span className="text-sm text-[#ED9121]">Perfil</span>
                    </a>
                </button>
            </div>
        </div>
        </>
           

    )
  }
  
export default NavBarMobile
  