import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import './librarianPage.css'
import { useContext } from 'react';
import { RoleContext } from '../../../app/context';
import { NavLink } from 'react-router-dom';

const LibrarianPage = () => {

    return (
		<Container>		
				<img className="librarianPage_img" src="https://i.pinimg.com/564x/50/16/01/501601bf2851ddd3bbf8fc9b602b9df4.jpg" alt="открытая книга"></img>
				<div className="librarianPage_btn">
					<NavLink className = "librarianPage_btn_addBooks" to= "/addBooks">Добавить книгу</NavLink> 
					<NavLink className = "librarianPage_btn_bookManagement" to= "/bookManagement">Управление книгами</NavLink>	
				</div>
				 
		</Container>
  	);
}
export default LibrarianPage