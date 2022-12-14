import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom'

import './AppBar.css'
import { RoleContext } from '../../../app/context';

export default function Appbar() {
  const { role, setRole } = useContext(RoleContext)
  return (
    <Box sx={{flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor:"gray"}}position="static">
        <Toolbar>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
			{role === 'user' && 
				<div>
					
				</div>

			}
			{role === 'admin' && 
				<div>
					
				</div>
		
			}
   		    {role === 'librarian' && 
				<div>
					
				</div>
		
			}
			{role === '' ?
				<div>
					<NavLink className={({ isActive }) => (isActive ? "bar__link_active" : "bar__link")} to="/login">Авторизация</NavLink>
					<NavLink className={({ isActive }) => (isActive ? "bar__link_active" : "bar__link")} to="/registration">Регистрация</NavLink>
				</div>
			:
				<button className='btn__exit'>
					<NavLink to="/login" onClick={() => setRole('')}>Выйти из учётной записи</NavLink>
				</button>
				
			}
			
        </Toolbar>
    </AppBar>
	<footer className='footer'>
		<a href="https://www.instagram.com/_antonina.kotk_/"><img className='img1' src="https://abrakadabra.fun/uploads/posts/2022-02/1645669785_1-abrakadabra-fun-p-logo-instagram-bez-fona-2.png" alt= "Инcтаграм" ></img></a>
		<a href="https://vk.com/antonina.kotk"><img className='img2' src="http://pngimg.com/uploads/vkontakte/vkontakte_PNG8.png" alt= "Вконтакте" ></img></a>
		<a href="https://xn--80affa3aj0al.xn--80asehdb/"><img className='img3' src="https://www.pngall.com/wp-content/uploads/11/Telegram-No-Background.png" alt="Telegram"></img></a>
		<a href="https://www.facebook.com/profile.php?id=100052153134329"><img className='img4' src="https://cdn-icons-png.flaticon.com/512/44/44646.png" alt= "FaceBook" ></img></a>
	</footer>
    </Box>
	
	
  );
}