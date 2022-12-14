
import { Container } from '@mui/material';

import './visitorRating.css'

import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Service from '../../../shared/api';
import PaginationRounded from '../../../shared/ui/Pagination';
import { Box } from '@mui/system';


const VisitorRating = () => {

    const [items, setItems] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        Service.getLogs(1)
            .then((data) => setItems(data))
            .catch(e => console.log('error'))
        Service.countLogs()
            .then(data => setTotalCount(data))
            .catch(e => console.log(e))
    }, [])

    const content = items.length !== 0 && <View setItems={setItems} totalCount={totalCount} items={items} />


    return (
		<Container>		
            <Box>
                <h1> Рейтинг посещений </h1>	
                {content}
				<NavLink className="btn_back" to="/admin">Назад</NavLink>
            </Box>
		</Container>
    )
}

const View = ({items, totalCount, setItems}) => {
    const[activePage, setActivePage] = useState(1);

    useEffect(() => {
        Service.getLogs(activePage)
            .then(data => setItems(data))
            .catch(e => console.log(e))
    }, [activePage])

    const content = items.map(({id, login, timeVisit, user}) => {
        const date = new Date(timeVisit);
        return (
            
            <li className="visitorRating_wrapperResult" key={id}>
                <div className="visitorRating_itemsResult" >
        
                    <p>Логин: {login}</p>
                    <p>Роль: {user.role}</p>
                    <p>timeVisit: {date.getDate() + "." + Number(date.getMonth() + 1) + "." + date.getFullYear()}</p>
                </div>
            </li>
        )
    })

    return (
        <>
            <div className="div_content">
                {content}
            </div>
            <PaginationRounded setActivePage={setActivePage} size={Math.ceil(totalCount / 9)}/>
        </>
    )

}

export default VisitorRating