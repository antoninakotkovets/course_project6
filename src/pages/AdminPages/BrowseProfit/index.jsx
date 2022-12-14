import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Service from '../../../shared/api';
import './browseProfit.css'


const BrowseProfit = () => {

    const [orders, setOrders] = useState([])
    const [profit, setProfit] = useState('')

    const onGetOrders = () =>{
        Service.getAllOrders() 
        .then(data => setOrders(data))
		.catch(()=> console.log('error'))
    }

    useEffect(() => {
		onGetOrders()
	}, [])

    
    const onProfit = () =>{
        Service.calcProfit() 
        .then(data => setProfit(data))
		.catch(()=> console.log('error'))
    }

    useEffect(() => {
		onProfit()
	}, [])


    
    const content = orders.length !==0 && orders.map(({id, book, customer}) => {
        return (
         
                <li key = {id} className="browseProfit_wrapperResult"> 
                    <div className="browseProfit_itemsResult">
                        <p>Заказ №: {id}</p>
                        <p>Книга:{book.name} {book.author}</p>
                        <p>Клиент: {customer.login}</p>
                        <p>Стоимость: {book.price} бел. руб.</p>
                    </div>
                  
                </li>
       
        )
    })

    return (
               
        <div>
            <NavLink className="btn_back" to="/viewAllOrders">Назад</NavLink>
            <div className="profit_content">
                {content}
             
            </div>
            
            <div className='result_profit'>
                <p>Прибыль равна: {profit} бел. руб.</p>
            </div>

        </div>
    );
};

export default BrowseProfit;