import Box from '@mui/material/Box';
import { Button, Container, TextField } from '@mui/material';

import './addLibrarian.css'
import { useContext, useState } from 'react';
import { RoleContext } from '../../../app/context';
import { NavLink } from 'react-router-dom';
import Service from '../../../shared/api';
import { nanoid } from 'nanoid';
import { Numbers } from '@mui/icons-material';


const AddLibrarian = () => {

      const[login, setLogin] = useState('');
      const[password, setPassword] = useState('');

      const handleClick = (e) =>{
            e.preventDefault()
            Service.registerLibrarian({login, password})
            .then((state) => state ? alert('Библиотекарь зарегистрирован!'): Promise.reject())
            .catch(() => alert('Логин уже занят!'))
      }
    return (
		<Container>
            
            <h1>Регистрация работника</h1>
            <NavLink className="btn_back" to="/admin">Назад</NavLink>
            <Box component='form' onSubmit = {handleClick}>
                  <div className='AL_login'>
                  <TextField sx={{marginTop:'10px'}}
                        required
                        id="outlined-required"
                        label="Логин библиотекаря"
                        fullWidth
                        value={login}
                        name="login"
                      
                  
                        onChange={(e)=>setLogin(e.target.value)}
		      />
                  <TextField sx={{marginTop:'10px', marginBottom:'10px'}}
                        required
                        id="outlined-required"
                        label="Пароль библиотекаря"
                        fullWidth
                        value={password}
                        name="login"
                        onChange={(e)=>setPassword(e.target.value)}
		      />
                  <button className="btn_reg_librarian" type='submit'  variant='contained'>
                       Зарегистрировать
                  </button>
                  </div>
            </Box>

		</Container>
  	);
}
export default AddLibrarian