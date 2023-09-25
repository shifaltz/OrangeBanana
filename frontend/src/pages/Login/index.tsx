import { Button, Input } from "@material-tailwind/react";
import logo from "../../assets/logo.png"
import {  login } from "../../api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type UserType = {
  email: string,
  password: string,
}

function Login() {

  const INITIAL_STATE = {email: "", password: ""}

  const[dataLogin, setDataLogin] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement>) =>{
    const { name, value } = event.target as HTMLInputElement
    setDataLogin((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    authenticateUser(dataLogin)
  }

  const authenticateUser = async (values: UserType) => {
    const response = await login(values)
    localStorage.setItem('token', JSON.stringify(response))
    navigate('/')
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/')
    }else{
      console.log('sem login')
    }
  }, [])
  

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="h-4/5 w-3/4 bg-[#2C2C2C] rounded-3xl flex">
        <div className="w-full lg:w-1/2 bg-[#EAEAEA] flex justify-center items-center rounded-3xl">
            <div className="w-full md:px-32 lg:px-24">
              <div className="h-52 items-center justify-center flex">
                <img src={logo} className="w-44 h-44"/>
              </div>
              <form className="w-full rounded-lg p-1 text-center" onSubmit={handleSubmit}>
                <div className=" flex flex-col justify-center gap-7">
                  <Input crossOrigin={undefined} type="text" name="email" variant="outlined" label="Email" color="orange" size="lg" onChange={handleChange}/>
                  <Input crossOrigin={undefined} type="password" name="password" variant="outlined" label="Senha" color="orange" size="lg" onChange={handleChange}/>
                  <div className="text-end -mt-6">
                    <p className="text-[#ED9121] hover:cursor-pointer text-sm">Esqueci a minha senha</p>
                  </div>
                  <Button type="submit" className="bg-[#ED9121] font-bold text-sm" size="md">ENTRAR</Button>

                  <p>Não tem conta? <a href="/register"><h1 className="text-[#ED9121] hover:cursor-pointer">Registre-se</h1></a></p>
                    
                </div>
              </form>
            </div>
          </div>
          <div
            className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center"
          >
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6 text-center">
              <p className="text-white text-2xl font-semibold">Bem-vindo ao</p>
              <h1 className="text-[#ED9121] font-bold text-5xl font-sans">
                Tangerine Ticket
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
