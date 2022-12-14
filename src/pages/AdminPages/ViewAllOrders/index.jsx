import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import './viewAllOrders.css'
import { NavLink } from 'react-router-dom';
import Service from '../../../shared/api';
import { useState } from 'react';
import { useTheme } from '@emotion/react';


const ViewAllOrders = () => {

    const [orders, setOrders] = useState([])


    const onGetOrders = () =>{
        Service.getAllOrders()
        .then(data => setOrders(data))
        .catch(() => console.log('error'))
    }

    useState(() =>{
        onGetOrders()
    }, [])

    const onSort = () => {
        const itemsToSort = [...orders];
        console.log(itemsToSort)
        setOrders(itemsToSort.sort((a, b) => a.book.price - b.book.price))
    }

    const onDisableSort = () => {
        Service.getAllOrders()
            .then(data => setOrders(data))
            .catch(e => console.log(e))
    }

  


    const content = orders.length !==0 && orders.map(({id, book, customer, destination, dataOrder}) => {
        const date = new Date(dataOrder)
        return (
            <Container key = {id}>
                <li className="allOrders_wrapperResult"> 
                    <div className="allOrders__itemsResult">
                        <p>Заказ №: {id}</p>
                        <p>Книга:{book.name} {book.author}, {book.yearOfPublishing} г. изд</p>
                        <p>Клиент: {customer.login}, {destination.name} {destination.surname}</p>
                        <p>Адрес: г. {destination. city}, ул. {destination.street}, д. {destination.houseNumber}, подъезд {destination.entranceNumber}, этаж {destination.floor}, кв. {destination.flatNumber}</p>
                        <p>Телефон: {destination.phoneNumber}</p>
                        <p>Дата заказа: {date.getDate() + "." + Number(date.getMonth() + 1) + "." + date.getFullYear()}</p>
                        <p>Стоимость: {book.price} бел. руб.</p>
                    </div>
                </li>
            </Container>
        )
    })


    return (
		<Container>		
               <div className="viewAllOrders_btn">
                <NavLink className="btn_profit" to ="/profit">Посмотреть прибыль</NavLink>
                    <button className="btn_sortOrders" onClick={onSort}>Отсортировать по стоимости</button>
                    <button className="btn_disSortOrders" onClick={onDisableSort}>Отменить сортировку</button>
                    

                </div>
				<h1>Просмотр всех заказов</h1>	

                <div className="div_content">
                    {content}
                </div>
				<NavLink className="btn_back" to="/admin">Назад</NavLink>
             
               

		</Container>
  	);
}
export default ViewAllOrders