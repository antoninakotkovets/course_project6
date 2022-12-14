import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper} from '@mui/material';
import { nanoid } from 'nanoid';

import Service from '../../shared/api';

import './registrationPage.css'

const RegistrationPage = () => {
    const paperStyle = {padding: '50px 20px', width:600, margin:"20px auto"}
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = (e)=>{
		e.preventDefault()
		const secretCode = nanoid();
		Service.register({login, password, secretCode})
			.then((state) => state ? alert('Вы зарегистрировались, ваш секретный код: ' + secretCode + '. Запомните его, ведь с помощью него можно восстановить пароль.') : Promise.reject())
			.catch(() => alert('Пользователь с таким логином уже существует'))
    }
    return (
		
		<Container>
			<img className='registrationPage_img' src='https://papik.pro/uploads/posts/2021-09/1631525970_13-papik-pro-p-kniga-konturnii-risunok-13.png' alt='книги'></img>

			<Paper className='paper' elevation = {3} style = {paperStyle}>
				<h1>Регистрация</h1>
				<Box
					onSubmit={handleClick}
					component="form"
					sx={{
						'& .MuiTextField-root': { m: 1, width: '50ch' },
					}}
					noValidate
					autoComplete="off"
				>
					<div className='login__wrapper'>
					<TextField
						required
						id="outlined-required"
						label="Логин"
						fullWidth
						value={login}
						name="login"
						onChange={(e)=>setLogin(e.target.value)}
					/>
					<TextField
						required
						id="outlined-password-input"
						label="Пароль"
						type="password"
						autoComplete="current-password"
						fullWidth
						value={password}
						name="password"
						onChange={(e)=>setPassword(e.target.value)}
					/>
					<button type='submit' className="button_reg" variant='contained'>Зарегистрироваться</button>
					</div>
				</Box>
			</Paper>
		</Container>
  	);
}

export default RegistrationPage