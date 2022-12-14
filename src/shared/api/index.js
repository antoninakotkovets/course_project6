export default class Service {
    static _baseUrl = 'http://localhost:8080'

    static getResources = async (url) => {
        const res = await fetch(url)

        return await res.json()
    }

    static postResource = async (url, method, body) => {
        const res = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        return await res.json()
    }

    static register = (body) => {
        return this.postResource(`${this._baseUrl}/users/add`, 'POST', body)
    }

    static login = (body) => {
        return this.postResource(`${this._baseUrl}/users/login`, 'POST', body)
    }
    static recover = (body) => {
        return this.postResource(`${this._baseUrl}/users/recover`, 'PUT', body)
    }

      static roleHandler = (id) => {
        return this.postResource(`${this._baseUrl}/users/handler/role/${id}`, 'PUT')
    }

    static getUser = () => {
        return this.postResource(`${this._baseUrl}/users/getAllUsers`)
    }
    static saveBooks = (body) =>{
        return this.postResource(`${this._baseUrl}/books/add`, 'POST', body)
    }

    static getAllBooks = () =>{
        return this.postResource(`${this._baseUrl}/books/getAll`)
    }

    static getBook = (id) =>{
        return this.postResource(`${this._baseUrl}/books/getBook/${id}`)
    }

    static registerLibrarian = (body) => {
        return this.postResource(`${this._baseUrl}/users/registerLib`, 'POST', body)
    }

    static saveDelivery = (body) => {
        return this.postResource(`${this._baseUrl}/order/add`, 'POST', body)
    }

    static deleteBook = (id) =>{
        return this.postResource(`${this._baseUrl}/books/delete/${id}`, 'DELETE')
    }

    static editBookInfo = (id, body) => {
        return this.postResource(`${this._baseUrl}/books/edit/${id}`, 'PUT', body)
    }

    
    static getAllOrders = () =>{
        return this.postResource(`${this._baseUrl}/order/getAll`)
    }

    static getLogs = (activePage) => {
        return this.getResources(`${this._baseUrl}/visitStatistics/getAll?offset=${activePage - 1}&limit=9`)
    }

    static countLogs = () => {
        return this.getResources(`${this._baseUrl}/visitStatistics/count`)
    }

    static fillLogs = (body, userId) => {
        return this.postResource(`${this._baseUrl}/visitStatistics/add/${userId}`, 'POST', body)
    }

    static deleteUser = (id) => {
        return this.postResource(`${this._baseUrl}/users/delete/${id}`, 'DELETE')
    }

    static roleHandler = (id) => {
        return this.postResource(`${this._baseUrl}/users/handler/role/${id}`, 'PUT')
    }

    static searchBook = (valueForSearch) => {
        return this.getResources(`${this._baseUrl}/books?valueForSearch=${valueForSearch}`)
    }

    static calcProfit = () =>{
        return this.postResource(`${this._baseUrl}/order/profit`)
    }
 
}