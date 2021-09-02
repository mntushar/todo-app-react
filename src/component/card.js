import {useState, Fragment, useEffect} from 'react'
import '../cse_component/my_style.css'
import CardStyle from './card_style'
import Navbar from './navbar';
import axios from 'axios';


export default function Card(){
    const [searchItem, setSearch] = useState('')
    const [cardData, setData] = useState('')
    const [error, setError] = useState(null)

    useEffect(async()=>{
        await axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/comments',
        })
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            setError(error)
        })

    }, [])

    const handelOnChange = (event) => {
        setSearch(event.target.value)
    }
    
    return(
        <Fragment>
            <Navbar />
            <h3 style={{textAlign: 'center', marginTop:'10px'}}>Function component</h3>
            <input 
                className='searchStyle' 
                type='text' 
                id='search' 
                name='search' 
                placeholder='search'
                onChange={handelOnChange}
            />
            {Object.keys(cardData).filter((key) => {
                if (cardData[key].name.toLowerCase().includes(searchItem.toLowerCase())){
                   return <CardStyle ardTitle={cardData[key].name} cardDes={cardData[key].body} cardDate={cardData[key].email} />
                }}).map(key => ( 
                    <CardStyle key={key} cardTitle={cardData[key].name} cardDes={cardData[key].body} cardDate={cardData[key].email} />
            ))} 
            
        </Fragment>
    )
}