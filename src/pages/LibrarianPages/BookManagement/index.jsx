import Box from '@mui/material/Box';
import { Container, TextField } from '@mui/material';

import './bookManagement.css'
import { useContext, useEffect, useState } from 'react';
import { RoleContext } from '../../../app/context';
import { NavLink } from 'react-router-dom';
import Service from '../../../shared/api';
import Modal from '../../../shared/ui/Modal';


//список всех книг и кнопки удаления и редактирвоания
const BookManagement = () => {
	
    const [books, setBooks] = useState([])
	const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    const [value, setValue] = useState('')

	
	const onGetAllBooks = () =>{
		Service.getAllBooks()
		.then(data => setBooks(data))
		.catch(()=> console.log('error'))
	}

	useEffect(() => {
		onGetAllBooks()
	}, [])

    const onDelete = (id) => {
        Service.deleteBook(id)
        .then(()=> onGetAllBooks())
        .catch(e => console.log(e))
    }
    
    const onEdit = (values) => {
        Service.editBookInfo(id, values)
            .then(()=>onGetAllBooks())
            .catch(e => console.log(e))
    }

    const onSearch = () =>{
		Service.searchBook(value)
		.then(data => setBooks(data))
		.catch(()=> console.log('error'))
	}

	if(value === ''){
		onGetAllBooks()
	}   
 
	const content = books.length !==0 && books.map(({id, name, author, yearOfPublishing, price, genre, numberOfPages, weight, manufacturer, image}) => {
		return(
		
			<Container key={id}>
					<li className="bookManagement_wrapperResult"> 
						<div className="bookManagenent_itemsResult">
							<img className='bookManagement_img_books' src={image} alt = "картинка книги"/>
							<div className='bookManagement_compoments'>
                                <div>
                                    <p>Название:</p>
                                    <p>{name}</p>
                                </div>
                                <div>
                                    <p>Автор: </p>
                                    <p>{author}</p>
                                </div>  
                            </div>
                            <div className='bookManagement_compoments'>
                                <div>
                                    <p>Год издания: </p>
                                    <p>{yearOfPublishing}</p>
                                </div>
                                <div>
                                    <p>Стоимость: </p>
                                    <p>{price} бел. руб.</p>
                                </div>
							</div>
							<div className='bookManagement_compoments'>
                                <div>
                                    <p>Жанр: </p>
                                    <p>{genre}</p>
                                </div>
                                <div>
                                    <p>Количество страниц: </p>
                                    <p>{numberOfPages}</p>
                                </div>
                            </div>
                            <div className='bookManagement_compoments'>
                                <div>
                                    <p>Вес книги:</p>
                                    <p> {weight} г.</p>
                                </div>
                                <div>
                                    <p>Изготователь:</p>
                                    <p>{manufacturer}</p>
                                </div>
                            </div>
                            <div className='bookManagement_btn'>
                                <button onClick={() => onDelete(id)} className='bm_delete'>Удалить</button>
                                <button className='bm_edit' onClick={() => {
                                    setOpen(true)
                                    setId(id)
                                }}>Изменить</button>
                            </div>
						</div>	
					</li>	
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
			
			<button className = "btn_search" onClick={onSearch}>Найти</button>
                {content}
			    <Modal onSubmitFunction = {onEdit}
                    open={open} 
                    setOpen={setOpen} 
                    inputs={[   
                        { name: 'name', placeholder: 'name' }, 
                        { name: 'author', placeholder: 'author' }, 
                        { name: 'yearOfPublishing', placeholder: 'year of publishing' },
                        { name: 'price', placeholder: 'price' },
                        { name: 'genre', placeholder: 'genre'},
                        { name: 'numberOfPages', placeholder: 'numberOfPages'},
                        { name: 'weight', placeholder: 'weight'},
                        { name: 'manufacturer', placeholder: 'manufacturer'},
                        { name: 'image', placeholder: 'image'}

                    ]}
                    initValues = {{name: '', author: '', yearOfPublishing: '', price: '', genre: '', numberOfPages: '', weight: '', manufacturer: '', image: ''}}
                />
				<NavLink className="btn_back" to="/librarian">Назад</NavLink>
		</Container>
  	);
}
export default BookManagement