import { Button, Checkbox, Input, Radio, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { EventType } from "../../types";
import { registerPatati } from "../../api";





function RegisterEvents() {

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

  const [requestBody, setRequestBody] = useState(INITIAL_STATE)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  
  const handleChange = ( event: React.ChangeEvent<HTMLInputElement>) =>{
    const { name, value } = event.target
    setRequestBody((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const convertStringToBoolean = (value) => {
    if(value === 'true') {
      return true
    }
    if(value === 'false') {
      return false
    }
    return false
  }

  const formatDateTime = () => {

      const dateParts = date.split("-");
      const timeParts = time.split(":");


      const combinedDate = new Date(
        parseInt(dateParts[0]),  // Ano
        parseInt(dateParts[1]) - 1,  // Mês (subtrai 1 porque os meses em JavaScript são baseados em zero)
        parseInt(dateParts[2]),  // Dia
        parseInt(timeParts[0]),  // Horas
        parseInt(timeParts[1])   // Minutos
      );

      const combinedDateTimeString = combinedDate.toISOString();
      
      return combinedDateTimeString
  
  }

  const registerEventDetails = async (values: EventType) => {
    console.log('aaaa' + values);
    await registerPatati(values)
    console.log('bbbb');
    
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const obj = {...requestBody}
    obj['online'] = convertStringToBoolean(requestBody.online)
    obj['free'] = convertStringToBoolean(requestBody.free)
    obj['date_time'] = formatDateTime()
    registerEventDetails(obj)
  }




  // useEffect(() => {
  //   console.log(requestBody);
  // },[requestBody])


  return (
      <div className="flex w-full col-start-1 lg:col-start-3 xl:col-start-3 col-span-12 md:col-span-12n lg:col-span-10 xl:col-span-10 justify-center items-center">

        <div className="w-full lg:w-auto xl:w-auto bg-[#EAEAEA] flex justify-center items-center rounded-3xl p-6">
          <div className="w-full md:px-32 lg:px-24">
            <div className="items-center justify-center flex mb-7">
              <h1 className="text-[#ED9121] text-3xl lg:text-4xl font-bold">Cadatro de Evento</h1>
            </div>
            <form onSubmit={handleSubmit} className="w-full rounded-lg p-1 text-center">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-7">
                  <Input onChange={handleChange} name="title" crossOrigin={undefined} type="text" variant="outlined" label="Titulo" color="orange" size="lg"/>
                </div> 
                <div className="flex lg:flex-row flex-col gap-7">
                    <Input onChange={(e) => setDate(e.target.value)} name="date" crossOrigin={undefined} type="date" variant="outlined" label="Data" color="orange" size="lg"/>
                    <Input onChange={(e) => setTime(e.target.value)} name="time" crossOrigin={undefined} type="time" variant="outlined" label="Horário" color="orange" size="lg"/>
                  </div>
                <div className="flex flex-row gap-7">
                  {/* <Select onChange={handleChange} id="event-type" name="type" label="Tipo do Evento" color="orange"> */}
  
                    <select onChange={handleChange} name="type" id="event-type">
                      <option value="course">Curso</option>
                      <option value="class">Aula</option>
                      <option value="mentoring">Mentoria</option>
                      <option value="lecture">Palestra</option>
                    </select>
                  {/* <Option value="Aula">Aula</Option>
                  <Option value="Palestra">Palestra</Option>
                  <Option value="Mentoria">Mentoria</Option>
                  <Option value="Curso">Curso</Option> */}
                </div>
                <div className="flex flex-row  gap-7">
                    <Textarea onChange={handleChange}  name="description" label="Descrição" color="orange"/>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-7">
                  <Radio onChange={handleChange} value="false" name="online" crossOrigin={undefined} label="Presencial" />
                  <Radio onChange={handleChange} value="true" name="online" crossOrigin={undefined} label="Online" defaultChecked />
                </div>
                <div className="flex flex-row gap-7">
                  <Input onChange={handleChange} name="address" crossOrigin={undefined} type="text" variant="outlined" label="Link ou Endereço" color="orange" size="lg"/>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-7">
                  <Checkbox onChange={handleChange} value="true" name="free" crossOrigin={undefined} label="Grátis" />
                  <div className="flex flex-row justify-center gap-7">
                    <Input onChange={handleChange} name="price" crossOrigin={undefined} type="text" variant="outlined" label="Preço" color="orange" size="lg"/>
                  </div>
                </div> 
                
                <div className="flex flex-col lg:flex-row justify-center gap-7">
                  <Input onChange={handleChange} name="thumbnail" crossOrigin={undefined} type="file" variant="outlined" label="Thumbnail" color="orange" size="md"/>
                  <Input onChange={handleChange} name="banner" crossOrigin={undefined} type="file" variant="outlined" label="Banner" color="orange" size="md"/>

                </div>
                <Button className="bg-[#ED9121] font-bold text-sm" size="md" type="submit">CADASTRAR</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default RegisterEvents;
