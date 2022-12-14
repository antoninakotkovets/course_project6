import Box from '@mui/material/Box';
import { Button, Container, TextField } from '@mui/material';
import './deliveryPage.css'
import { useContext, useState } from 'react';
import { CurrentUserContext, RoleContext } from '../../../app/context';
import { Link, Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import Service from '../../../shared/api';

//city, street, houseNumber, entranceNumber, floor, flatNumber,phoneNumber
const DeliveryPage = () => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [city, setCity] = useState('');
	const [street, setStreet] = useState('');
	const [houseNumber, setHouseNumber] = useState('');
	const [entranceNumber, setEntranceNumber] = useState('');
	const [floor, setFloor] = useState('');
	const [flatNumber, setFlatNumber] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const { currentUser } = useContext(CurrentUserContext)
	const navigate = useNavigate()
	const { bookId } = useParams()


	const saveClick = (e) =>{
		e.preventDefault()
		Service.saveDelivery({name, surname, city, street, houseNumber, entranceNumber, floor, flatNumber, phoneNumber, bookId, currentUser})
		.then((state) => state ? alert ('Заказ оформлен! Ожидайте доставку.'): Promise.reject())
		.catch(()=>alert('Не корректно введены данные!'))
	}
	    return (
		<Container>		
				<h1> Заполните данные для доставки </h1>	
				<button className="btn_back" onClick={() => navigate(-1)}>Назад</button>
				<Box>
					<form onSubmit={saveClick}>
					<div className="delivery_form">
						<TextField  sx={{marginTop:'5px'}} 
							required
							id="outlined-required"
							label = "Имя"
							value={name}
							onChange = {(e) => setName(e.target.value)}
							fullWidth>
						</TextField>
						<TextField  sx={{marginTop:'5px'}} 
							required
							id="outlined-required"
							label = "Фамилия"
							value={surname}
							onChange = {(e) => setSurname(e.target.value)}
							fullWidth>
						</TextField>
						<TextField  sx={{marginTop:'5px'}} 
							required
							id="outlined-required"
							label = "Город"
							value={city}
							onChange = {(e) => setCity(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'5px'}} 
							required
							id="outlined-required"
							label = "Улица"
							value={street}
							onChange = {(e) => setStreet(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'5px'}} 
							required
							id="outlined-required"
							label = "Номер дома"
							value={houseNumber}
							onChange = {(e) => setHouseNumber(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'5px'}} 
							required
							id="outlined-required"
							label = "Номер подъезда"
							value={entranceNumber}
							onChange = {(e) => setEntranceNumber(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'5px'}} 
							required
							id="outlined-required"
							label = "Этаж"
							value={floor}

							onChange = {(e) => setFloor(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'5px'}} 
							required
							id="outlined-required"
							label = "Номер квартиры"
							value={flatNumber}
							onChange = {(e) => setFlatNumber(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'5px'}} 
							country = "Belarus"
							required
							id="outlined-required"
							label = "Номер телефона для связи с курьером "
							value={phoneNumber}
							onChange = {(e) => setPhoneNumber(e.target.value)}
							fullWidth>
						</TextField>
					
						<div>
							<button  type='submit' className='delivery_btn_save'>Заказать</button>
							<p className="delivery_p">*Оплата производится, при получении товара, курьеру.</p>
						</div>
						
					</div>
						
					</form>
				</Box>
		</Container>
  	);
}
export default DeliveryPage