import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Paper} from '@mui/material';

import Service from '../../shared/api';
import { CurrentUserContext, RoleContext } from '../../app/context';

import './loginPage.css'

function LoginPage() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {role, setRole} = useContext(RoleContext);
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
    const navigate = useNavigate()

    const handleClick = (e) => {
        Service.login({ login, password })
            .then((data) => {
                console.log(login, password)
                console.log(data)
                data ? saveRole(data) : Promise.reject()
            })
            .catch(() => alert('Неверный логин или пароль'));
    };

    const saveRole = (data) =>{        
        setRole(data.role)
        setCurrentUser(data.id)
        Service.fillLogs({login: data.login, timeVisit: new Date()}, data.id)
        navigate('/' + data.role.toLowerCase())  
       // navigate("/admin") 
        //navigate("/librarian")
      

    }
    
       
    return (
        <Box className="container">
            <img className='loginPage_img' src='https://papik.pro/uploads/posts/2021-09/1631525970_13-papik-pro-p-kniga-konturnii-risunok-13.png' alt='книги'></img>
            <Container>
               
                <Paper className='paper' elevation={3} style={paperStyle}>
                    <h1>Авторизация</h1>
                    
                    <Box
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
                                onChange={(e) => setLogin(e.target.value)} />
                            <TextField className="textPassword"
                                id="outlined-password-input"
                                label="Пароль"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <Button className="button_enter" onClick={handleClick}>Войти</Button>
                            <Link className="recoverLink" to="/recover">Забыли пароль?</Link>
                        </div>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default LoginPage;