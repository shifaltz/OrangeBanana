import { VisibilityOff, Visibility } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";
import Button from '@mui/material/Button';


function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="h-4/5 w-3/4 bg-[#2C2C2C] rounded-[50px] flex">
          <div
            className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center"
          >
            <div
              className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
            ></div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6 text-center">
              <p className="text-white text-2xl font-semibold">Bem-vindo ao</p>
              <h1 className="text-[#ED9121] font-bold text-5xl font-sans">
                Tangerine Ticket 
              </h1>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center bg-[#EAEAEA] space-y-8 rounded-br-[50px] rounded-tr-[50px]">
            <div className="w-full px-8 md:px-32 lg:px-24">
              <form className="bg-white rounded-md shadow-2xl p-5 text-center">
                <TextField sx={{ height: '80px', width: '426px', marginBottom: '30px'}} id="outlined-basic" color="warning" label="Email" variant="outlined" focused />
                <FormControl sx={{ height: '80px', width: '426px'}} variant="outlined" color="warning" focused>
                  <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility color="warning" /> : <VisibilityOff color="warning"/>}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <div className="flex w-[455px] justify-end mb-14 -mt-5">
                  <p className="text-[#ED9121] hover:cursor-pointer">Esqueci minha senha</p>
                </div>
                <Button variant="contained" color="warning" className="w-[455px]"><p className="text-white font-bold text-[24px]">ENTRAR</p></Button>
                <div className="flex justify-center">
                  <p>Não tem conta?</p><p className="text-[#ED9121] hover:cursor-pointer ml-1">  Registre-se</p>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
