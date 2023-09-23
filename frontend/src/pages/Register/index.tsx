import { Button, Input } from "@material-tailwind/react";
import logo from "../../assets/logo.png"

function Register() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="h-4/5 w-3/4 bg-[#2C2C2C] rounded-3xl flex">
          <div
            className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center"
          >
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6 text-center">
              <div className="h-52 items-center justify-center flex">
                <img src={logo} className="w-44 h-44"/>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-[#EAEAEA] flex justify-center items-center rounded-3xl">
            <div className="w-full md:px-32 lg:px-24">
              <div className="items-center justify-center flex mb-7">
                <h1 className="text-[#ED9121] text-4xl font-bold">Crie sua conta</h1>
              </div>
              <form className="w-full rounded-lg p-1 text-center">
                <div className=" flex flex-col justify-center gap-7">
                  <Input crossOrigin={undefined} type="text" variant="outlined" label="Nome" color="orange" size="lg"/>
                  <Input crossOrigin={undefined} type="text" variant="outlined" label="Email" color="orange" size="lg"/>
                  <Input crossOrigin={undefined} type="password" variant="outlined" label="Senha" color="orange" size="lg"/>
                  <Input crossOrigin={undefined} type="password" variant="outlined" label="Confirme sua senha" color="orange" size="lg"/>
                  <Button className="bg-[#ED9121] font-bold text-sm" size="md">CADASTRAR</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
