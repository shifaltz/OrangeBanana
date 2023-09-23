import { Button, Checkbox, Input, Option, Radio, Select, Textarea } from "@material-tailwind/react";


function RegisterEvents() {
  return (
    <>
        <div className="bg-[#EAEAEA] flex justify-center items-center rounded-3xl">
          <div className="w-full md:px-32 lg:px-24">
            <div className="items-center justify-center flex mb-7">
              <h1 className="text-[#ED9121] text-2xl lg:text-4xl font-bold">Cadatro de Evento</h1>
            </div>
            <form className="w-full rounded-lg p-1 text-center">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-7">
                  <Input crossOrigin={undefined} type="text" variant="outlined" label="Titulo" color="orange" size="lg"/>
                </div> 
                <div className="flex lg:flex-row flex-col gap-7">
                    <Input crossOrigin={undefined} type="date" variant="outlined" label="Data" color="orange" size="lg"/>
                    <Input crossOrigin={undefined} type="text" variant="outlined" label="Horário" color="orange" size="lg"/>
                  </div>
                <div className="flex flex-row gap-7">
                  <Select label="Tipo do Evento" color="orange">
                    <Option>Curso</Option>
                    <Option>Aula</Option>
                    <Option>Palestra</Option>
                    <Option>Mentoria</Option>
                  </Select>
                </div>
                <div className="flex flex-row  gap-7">
                    <Textarea label="Descrição" color="orange"/>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-7">
                  <Radio crossOrigin={undefined} name="type" label="Presencial" />
                  <Radio crossOrigin={undefined} name="type" label="Online" defaultChecked />
                </div>
                <div className="flex flex-row gap-7">
                  <Input crossOrigin={undefined} type="text" variant="outlined" label="Link ou Endereço" color="orange" size="lg"/>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-7">
                  <Checkbox crossOrigin={undefined} label="Grátis" />
                  <div className="flex flex-row justify-center gap-7">
                    <Input crossOrigin={undefined} type="text" variant="outlined" label="Preço" color="orange" size="lg"/>
                  </div>
                </div> 
                
                <div className="flex flex-col lg:flex-row justify-center gap-7">
                  <Button className="bg-[#EAEAEA] border border-[#ED9121] font-bold text-sm text-gray-800" size="md">UPLOAD THUMBNAIL</Button>
                  <Button className="bg-[#EAEAEA] border border-[#ED9121] font-bold text-sm text-gray-800" size="md">UPLOAD BANNER</Button>
                </div>
                <Button className="bg-[#ED9121] font-bold text-sm" size="md">CADASTRAR</Button>
              </div>
            </form>
          </div>
        </div>
  </>
  );
}

export default RegisterEvents;
