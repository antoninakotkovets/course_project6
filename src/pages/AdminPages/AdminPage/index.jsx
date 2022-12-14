import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import './adminPage.css'
import { useContext } from 'react';
import { RoleContext } from '../../../app/context';
import { NavLink } from 'react-router-dom';


const AdminPage = () => {
	
    const {role, setRole} = useContext(RoleContext);
	
    return (
		<Container>		
			<div className="btn_admin">
				<img className="img_admin" src="https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-admin.png" alt="Админ"></img>
				<NavLink className = "btn_visitorRating" to= "/visitorRating">Рейтинг посещений</NavLink> 	
				<NavLink className = "btn_librarian" to= "/librarianManagement"> Управление работниками</NavLink> 
				<NavLink className = "btn_addLibrarian" to= "/addLibrarian">Добавить библиотекаря</NavLink> 	
				<NavLink className = "btn_viewAllOrders" to= "/viewAllOrders">Просмотреть все заказы</NavLink> 	
		
			</div>
				
		</Container>
  	);
}
export default AdminPage