import Box from '@mui/material/Box';
import { Container, TextField } from '@mui/material';

import './addBooks.css'
import { useContext, useState } from 'react';
import { RoleContext } from '../../../app/context';
import { NavLink } from 'react-router-dom';
import Service from '../../../shared/api';


const AddBooks = () => {
	
	const [name, setName] = useState('');
	const [author, setAuthor] = useState('');
	const [yearOfPublishing, setYearOfPublishing] = useState('');
	const [price, setPrice] = useState('');
	const [genre, setGenre] = useState('');
	const [numberOfPages, setNumberOfPages] = useState('');
	const [weight, setWeight] = useState('');
	const [manufacturer, setManufacturer] = useState('');
	const [image, setImage] = useState('');


	const saveClick = (e) =>{
		e.preventDefault()
		console.log(numberOfPages)
		Service.saveBooks({name, author, yearOfPublishing, price, genre, numberOfPages, weight, manufacturer, image })
		.then((state) => state ? alert ('Книга добавлена!'): Promise.reject())
		.catch(()=>alert('Не корректно введены данные!'))
	}


    return (
		<Container>		
				<h2 className="addBooks_h2">Регистрация книги</h2>	
				<NavLink className="btn_back" to="/librarian">Назад</NavLink>
				<Box>
					<form onSubmit={saveClick}>
					<div className="addBooks_form">
						<TextField  sx={{marginTop:'10px'}} 
							required
							id="outlined-required"
							label = "Название"
							value={name}
							onChange = {(e) => setName(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'10px'}}
							required
							id="outlined-required"
							label = "Автор"
							value={author}
							onChange = {(e) => setAuthor(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'10px'}}
							required
							id="outlined-required"
							label = "Год издания"
							value={yearOfPublishing}
							onChange = {(e) => setYearOfPublishing(e.target.value)}
							fullWidth>
						</TextField>

						<TextField sx={{marginTop:'10px'}}
							required
							id="outlined-required"
							label = "Стоимость"
							value={price}
							onChange = {(e) => setPrice(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'10px'}}
							required
							id="outlined-required"
							label = "Жанр"
							value={genre}
							onChange = {(e) => setGenre(e.target.value)}
							fullWidth>
						</TextField>
						<p sx={{marginTop:'10px'}} className="b_numberOfPages">Количество страниц:</p>
						<select required value={numberOfPages} className = 'b_s_numberOfPages'
						onChange={(e) => setNumberOfPages(e.target.value)}>
							<option>до 100</option>
							<option>100-300</option>
							<option>300-500</option>
							<option>500-700</option>
							<option>700-1000</option>
							<option>свыше 1000</option>
							<option>свыше 2000</option>
							<option>свыше 3000</option>
						</select>
						<TextField sx={{marginTop:'10px'}}
							required
							id="outlined-required"
							label = "Вес"
							value={weight}
							onChange = {(e) => setWeight(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'10px'}}
							required
							id="outlined-required"
							label = "Издание"
							value={manufacturer}
							onChange = {(e) => setManufacturer(e.target.value)}
							fullWidth>
						</TextField>
						<TextField sx={{marginTop:'10px'}}
							required
							id="outlined-required"
							label = "Ссылка на картинку"
							value={image}
							onChange = {(e) => setImage(e.target.value)}
							fullWidth>
						</TextField>
					
						<div>
							<button type='submit' className='btn_b_save'>Добавить</button>
						</div>
					</div>
						


					</form>
				</Box>
		</Container>
  	);
}
export default AddBooks