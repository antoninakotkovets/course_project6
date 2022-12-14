import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import './librarianManagement.css'
import { NavLink } from 'react-router-dom';
import Service from '../../../shared/api';
import { useEffect, useState } from 'react';


const LibrarianManagement = () => {
	const [users, setUsers] = useState([])

	const onGetUser = () =>{
		Service.getUser()
		.then(data => setUsers(data))
		.catch(() => console.log ('error'))
	}
	
	useEffect(()=> {
		onGetUser()
	}, [])

	const onDelete = (id) =>{
		Service.deleteUser(id)
		.then(() => onGetUser())
		.catch(e => console.log(e))
	}

	const onChangeRole = async (id) => {
        await Service.roleHandler(id)
        Service.getUser()
            .then(data => setUsers(data))
            .catch(() => console.log('error'))
    }



	const content = users.length !== 0 && users.map(({ id, login, role }) =>{
		return(
			<Container key = {id}>
				<li className="libManagement_wrapperResult">
					<div className="libManagement_itemsResult">
						<p>Логин: {login}</p>
						<p>Роль: {role}</p>
					</div>
					<div className="libManag_btn">
						<button onClick={() => onDelete(id)} className="libManag_delete">Удалить</button>
						<button onClick={() => onChangeRole(id)} className="libManag_roleEdit">Сменить роль</button>

					</div>
				</li>

			</Container>
		)
	})

    return (
		<Container>		
				<h1> Управление работниками магазина</h1>	
				<div className="div_content">
					{content}
				</div>
			
				<NavLink className="btn_back" to="/admin">Назад</NavLink>
		</Container>
  	);
}
export default LibrarianManagement