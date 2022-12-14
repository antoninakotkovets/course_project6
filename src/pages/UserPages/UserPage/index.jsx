import Box from '@mui/material/Box';
import { Button, Container, TextField } from '@mui/material';
import './userPage.css'
import { useState } from 'react';
import Service from '../../../shared/api';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const UserPage = () => {
	//при переходе на страничку отображаются все книги из бд 

	const[books, setBooks] = useState([])
	const[value, setValue] = useState('')
	const [filtered, setFiltered] = useState([])


	const onGetBooks = () =>{
		Service.getAllBooks()
		.then(data => {
			setBooks(data);
			setFiltered(data);
		})
		.catch(()=> console.log('error'))
	}
	useEffect(() => {
		onGetBooks()
	}, [])

	const onSearch = () =>{
		Service.searchBook(value)
		.then(data => setBooks(data))
		.catch(()=> console.log('error'))
	}
	const onSelectByBooks = (e) => {
		if (e.target.value === 'all') {
			setFiltered(books);
		} else {
			setFiltered(books.filter(item => item.genre == e.target.value))
		}
    }
	 
	const content = filtered.length !==0 && filtered.filter(({deleted}) => deleted === false).map(({id, name, author, yearOfPublishing, price, image, genre}) => {
		return(
			<Container key={id}>
				<NavLink to={`/book/${id}`} className='book' key={id}>
					<li className="p_wrapperResult"> 
						<div className="p_itemsResult">
							<img className='img_books' src={image} alt = "картинка книги"/>
							<p>{name}</p>
							<p>Автор: {author}</p>
							<p>Год издания: {yearOfPublishing}</p>
							<p>Стоимость: {price} бел. руб.</p>
						</div>	
					</li>	
					
				</NavLink>
			</Container>
			
		
		)
	})

    return (
		<Container>
			<div className = "user_search">
				<TextField 
					fullWidth
					value={value}
					label = "Поиск"
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
			<select className="select_books" onChange={onSelectByBooks}>
                    <option value="all">Все</option>
                    {books.map(item => {
                        return <option key={item.genre} value={item.genre}>{item.genre}</option>
                    })}
                </select>
			<button className = "btn_search" onClick={onSearch}>Найти</button>
			
			<div className='div_content'>
			{content}

			</div>
		</Container>
	
  	);
}
export default UserPage