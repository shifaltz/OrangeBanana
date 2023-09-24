import NavBarMobile from "../NavBarMobile"

function EventDetails() {
    return (
        <div className="grid grid-cols-2 w-full col-start-1 lg:col-start-3 col-span-12">
        <div className="col-span-2 grid grid-rows-2 justify-center lg:absolute min-h-screen bg-[#303030] lg:bg-transparent">
            <div className="grid justify-center content-end row-span-1 px-6 ">
                <img src="https://assets.thetown.com.br/noticias/8ff62eb0-7f77-4b9e-a73d-885244ec4406.jpg" alt=""/>
            </div>
            <div className="grid grid-rows-6 justify-center row-span-1">
                <div className="grid justify-center self-center max-h-8 row-span-1">
                    <button className="w-80 bg-[#ED9121] rounded-full px-3 py-1 text-sm font-semibold text-white font-['Inter'] mr-2 mb-2">Quero Participar</button>
                </div>
                <div className="grid justify-self-center row-span-5 content-around w-4/5 pb-10">
                    <h4 className="text-white lg:text-black font-bold font-['Inter']">Apresentação: </h4>
                    <span className="text-white lg:text-black font-['Inter']">06/02/2024 e 07/02/2024</span>
                    <h4 className="text-white lg:text-black font-bold font-['Inter']">Local: </h4>
                    <span className="text-white lg:text-black font-['Inter']">Allianz Parque </span>
                    <h4 className="text-white lg:text-black font-bold font-['Inter']">Endereço: </h4>
                    <span className="text-white lg:text-black font-['Inter']">Av. Francisco Matarazzo, 1705 Água Branca, São Paulo - SP</span>
                    <h4 className="text-white lg:text-black font-bold font-['Inter']">Classificação Etária: </h4>
                    <span className="text-white lg:text-black font-['Inter']">16 anos.</span>
                </div>
            </div>
        </div>

        <div className="grid -z-50 lg:static min-h-screen col-span-3 grid-start-2 grid-cols-4 grid-flow-col grid-rows-6">
            <div className="bg-[#303030] lg:bg-[#303030] h-14 lg:h-auto row-span-1 lg:row-span-2 col-span-4 grid grid-cols-11 xl:grid-cols-12 content-end pb-5 gap-3">
                <span className="text-center col-start-2 lg:col-start-7 xl:col-start-6 col-span-3 lg:col-span-4 xl:col-span-2 inline-block bg-[#ED9121] rounded-full px-3 py-1 text-sm font-semibold text-white font-['Inter'] mr-2 mb-2">Presencial</span>
                <span className="text-center col-start-5 lg:col-start-7 xl:col-start-8 col-span-3 lg:col-span-4 xl:col-span-2 inline-block bg-[#ED9121] rounded-full px-3 py-1 text-sm font-semibold text-white font-['Inter'] mr-2 mb-2">Grátis</span>
                <span className="text-center col-start-8 lg:col-start-7 xl:col-start-10 col-span-3 lg:col-span-4 xl:col-span-2 inline-block bg-[#ED9121] rounded-full px-3 py-1 text-sm font-semibold text-white font-['Inter'] mr-2 mb-2">Palestra</span>
            </div>
            <div className="grid grid-cols-12 col-span-4 row-span-4 h-full">
                <div className="col-span-12 xl:col-span-4 col-start-1 lg:col-start-6 xl:col-start-7 text-center p-5">
                    <h1 className="text-white text-4xl font-bold font-['Inter']">THE TOWN - SÃO PAULO</h1>
                    <h3 className="text-white text-xl font-bold font-['Inter']">Domingo, 08 de Outubro de 2023</h3>
                </div>
                <div className="col-span-12 xl:col-span-6 col-start-1 lg:col-start-6 xl:col-start-6 text-center p-5">
                <p className="text-center text-black text-xl xl:text-2xl font-medium font-['Inter']">Is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum
                    has been the industry's standard is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum
                    has been the industry's standard is simply dummy text of the printing dard </p>
                </div>

                <div className="text-center col-span-12 xl:col-span-6 col-start-1 lg:col-start-7 xl:col-start-6">
                    <h3 className="text-white text-2xl font-bold font-['Inter']">Apresentadores</h3>
                </div>
                <div className="grid grid-flow-col justify-center gap-12 col-span-12 xl:col-span-6 col-start-1 lg:col-start-7 xl:col-start-6 text-center p-5">
                    <img className="w-24 h-24 rounded-3xl shadow" src="https://via.placeholder.com/102x102" />
                    <img className="w-24 h-24 rounded-3xl shadow" src="https://via.placeholder.com/102x102" />
                    <img className="w-24 h-24 rounded-3xl shadow" src="https://via.placeholder.com/102x102"/>
                </div>
            </div>
        </div>
        <NavBarMobile />
        </div>
    )
}

export default EventDetails


