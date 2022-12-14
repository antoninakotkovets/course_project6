import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Service from '../../../shared/api';
import './singleBookPage.css';

const SingleBookPage = () => {

    const {id} = useParams()
    const[book, setBook] = useState({});
    
    useEffect(()=>{
        console.log(1)
        console.log(id)
        Service.getBook(id)
            .then(data => {
                console.log(data)
                setBook(data)
            })
            .catch(()=> console.log('error'))
    }, [])


    const content = book.length !== 0 &&  <View book = {book}/>
    return (
        <div>
            {content}
        </div>
    );
};

const View = ({book}) => {
    const{id, name, author, yearOfPublishing, price, genre, numberOfPages, weight, manufacturer, image} = book;

    return(
        <Container>
            <div className='div_page'>
                <img className='imgBook' src={image} alt = "картинка книги"/>
                <div className="p_wrapper">
                    <h1> {name}</h1>
                    <h2 className="author_single"> {author}</h2>
        
                        <p className="year_single">Книга относится к {yearOfPublishing} году издания.</p>
                    
                    <h4 className="single_inf">Более подробная информация</h4>
                    <p className="single_genreAndWeight">Данное произведение относится к жанру {genre}. Вес книги составляет {weight} грамм.  </p>
                    <div className="single_numberOfPades_manufacturer">
                        <p>Количество страниц: {numberOfPages}</p>
                        <p>Изготовитель: {manufacturer}</p>
                    </div>
                    <h3 className="single_price">Стоимость: {price} бел. руб.</h3>
                </div>
            </div>
            <NavLink className="btn_back" to="/user">Назад</NavLink>
            <button className="btn_delivery">
                <NavLink to={"/delivery/"+id}>Оформить доставку</NavLink>
            </button>


        </Container>
        
        
      
        
    )
}

export default SingleBookPage;