import { listEvents } from "../../api";
import { useEffect, useState } from "react";
import { format } from 'date-fns-tz';
import ptBR from 'date-fns/locale/pt-BR';
import { parseISO } from "date-fns";
import { EventType } from "../../types";
import NavBarMobile from "../../components/NavBarMobile";

function Home() {

  const[event, setEvent] = useState<EventType[]>([]);

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

  const getEvents = async () => {
    const response = await listEvents()
    setEvent(response)
  }

  useEffect(() =>  {
    getEvents()
  }, [])

  return (

      <div className="grid col-start-1 lg:col-start-3 xl:col-start-3 col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-10 flex-col h-full bg-[#BFBFBF]">
        <div className="flex justify-center items-center w-full h-36 bg-[#303030] shadow-md">
          <div className="pt-2 relative mx-auto text-gray-600">
            <input className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search"/>
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
              version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="512px" height="512px">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
          </div>
        </div>  

        { event.map( (event) => (
          <div className="p-10 pb-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          <a href={`/event-details/${event.id}`} className="bg-[#D9D9D9] rounded-[20px] shadow xl:col-span-6 xl:h-80 xl:grid xl:grid-cols-12 xl:grid-rows-6">
            <img className="w-full xl:w-auto xl:row-span-6 xl:h-full xl:col-span-3 rounded-tl-[20px] rounded-tr-[20px] xl:rounded-tr-[0px] xl:rounded-bl-[20px]" src={event.banner} alt={`Logo ${event.title}`}/>
            <div className="px-6 py-4 xl:mt-16 xl:col-start-4 xl:grid xl:grid-rows-3 xl:col-span-9 xl:row-span-4 xl:ml-10">
              <div className="w-full text-black text-base xl:text-2xl font-medium font-['Inter']">{event.title}</div>
              <div className="w-full text-black text-base xl:text-xl font-light font-['Inter']">{formatDate(event.date_time)}</div>
              <div className="text-black text-base xl:text-xl font-bold font-['Inter']">{event.address}</div>
            </div>
            <div className="px-6 pt-4 pb-2 xl:col-start-4 xl:col-span-6 xl:ml-10 ">
              <span className="inline-block bg-[#ED9121] rounded-full px-3 py-1 text-sm font-semibold text-white font-['Inter'] mr-2 mb-2">{event.online ? "Online" : "Presencial"}</span>
              <span className="inline-block bg-[#ED9121] rounded-full px-3 py-1 text-sm font-semibold text-white font-['Inter'] mr-2 mb-2">{event.price === "0" ? "Grátis" : `R$ ${event.price},00`}</span>
            </div>
          </a>
          </div>
        ))}
        <NavBarMobile />
    </div>
  )
}

export default Home
