import { useParams } from "react-router"
import { requestEventById } from "../../api"
import { useEffect, useState } from "react"
import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"
import { EventType } from "../../types"
import NavBarMobile from "../../components/NavBarMobile"

function EventDetails() {
    const INITIAL_STATE = {
        title: '',
        date_time: '',
        type: '',
        address: '',
        description: '',
        host: '',
        online: false,
        free: false,
        price: '',
        thumbnail: '',
        banner: ''
    } 
    
    
    const [eventDetails, setEventDetails] = useState<EventType>(INITIAL_STATE)
    const [dateTime, setDateTime] = useState<string>('')
    const { eventid } = useParams()

    function formatDate(dateString:string) {
        const date = parseISO(dateString);
        const daysOfWeek = [
          'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta-feira', 'Sábado'
        ];
        const dayOfWeek = daysOfWeek[date.getDay()]; // Obtém o nome do dia da semana
        const dayOfMonth = format(date, 'dd'); // Obtém o dia do mês no formato 'dd'
        const month = format(date, 'MMMM', { locale: ptBR } ); // Obtém o nome do mês no formato 'MMMM'
        const year = format(date, 'yyyy'); // Obtém o ano no formato 'yyyy'
      
        return `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`;
      }

    const getEventDetail = async () => {
        const response = await requestEventById(eventid || '')
        setEventDetails(response)
        setDateTime(formatDate(response.date_time))
      }

    useEffect(() => {
        getEventDetail()
    }, [])

    return (
        <div className="grid grid-cols-2 w-full col-start-1 lg:col-start-3 col-span-12">
        <div className="col-span-2 grid grid-rows-2 justify-center lg:absolute min-h-screen bg-[#303030] lg:bg-transparent">
            <div className="grid justify-center content-end row-span-1 px-6 ">
                <img src={eventDetails.thumbnail} alt=""/>
            </div>
            <div className="grid grid-rows-6 justify-center row-span-1">
                <div className="grid justify-center self-center max-h-8 row-span-1">
                    <button className="w-80 bg-[#ED9121] rounded-full px-3 py-1 text-sm font-semibold text-white font-['Inter'] mr-2 mb-2">Quero Participar</button>
                </div>
                <div className="grid justify-self-center row-span-5 content-around w-4/5 pb-10">
                    <h4 className="text-white lg:text-black font-bold font-['Inter']">Apresentação: </h4>
                    <span className="text-white lg:text-black font-['Inter']">{dateTime}</span>
                    <h4 className="text-white lg:text-black font-bold font-['Inter']">Endereço: </h4>
                    <span className="text-white lg:text-black font-['Inter']">{eventDetails.address}</span>
                </div>
            </div>
        </div>

        <div className="grid -z-50 lg:static min-h-screen col-span-3 grid-start-2 grid-cols-4 grid-flow-col grid-rows-6">
            <div className="bg-[#303030] lg:bg-[#303030] h-14 lg:h-auto row-span-1 lg:row-span-2 col-span-4 grid grid-cols-11 xl:grid-cols-12 content-end pb-5 gap-3">
                <span className="text-center col-start-2 lg:col-start-7 xl:col-start-6 col-span-3 lg:col-span-4 xl:col-span-2 inline-block bg-[#ED9121] rounded-full px-3 py-1 text-sm font-semibold text-white font-['Inter'] mr-2 mb-2">{eventDetails.online ? 'Online' : 'Presencial' }</span>
                <span className="text-center col-start-5 lg:col-start-7 xl:col-start-8 col-span-3 lg:col-span-4 xl:col-span-2 inline-block bg-[#ED9121] rounded-full px-3 py-1 text-sm font-semibold text-white font-['Inter'] mr-2 mb-2">{eventDetails.price === '0' ? 'Grátis' : `R$ ${eventDetails.price}`}</span>
                <span className="text-center col-start-8 lg:col-start-7 xl:col-start-10 col-span-3 lg:col-span-4 xl:col-span-2 inline-block bg-[#ED9121] rounded-full px-3 py-1 text-sm font-semibold text-white font-['Inter'] mr-2 mb-2">{eventDetails.type}</span>
            </div>
            <div className="grid grid-cols-12 col-span-4 row-span-4 h-full">
                <div className="col-span-12 xl:col-span-4 col-start-1 lg:col-start-6 xl:col-start-7 text-center p-5">
                    <h1 className="text-white text-4xl font-bold font-['Inter']">{eventDetails.title}</h1>
                    <h3 className="text-white text-xl font-bold font-['Inter']">{dateTime}</h3>
                </div>
                <div className="col-span-12 xl:col-span-6 col-start-1 lg:col-start-6 xl:col-start-6 text-center p-5">
                <p className="text-center text-black text-xl xl:text-2xl font-medium font-['Inter']">{eventDetails.description}</p>
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


