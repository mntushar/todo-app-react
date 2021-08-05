import react, {useState} from 'react'
import '../cse_component/style.css'
import {Form} from 'react-bootstrap'
import CardStyle from './card_style'
import Data from '../data/card_data.json'


export default function Card(){
    const [searchItem, setSearch] = useState('')

    const handelOnChange = (event) => {
        setSearch(event.target.value)
    }

    return(
        <div>
            <input 
                className='searchStyle' 
                type='text' 
                id='search' 
                name='search' 
                placeholder='search'
                onChange={handelOnChange}
            />
             
            <div>
                {Data.filter((val) => {
                    if (val.title.toLowerCase().includes(searchItem.toLowerCase())){
                       return <CardStyle cardTitle={val.title} cardDes={val.description} cardDate={val.date} />
                    }
                }

                ).map((item) => <CardStyle cardTitle={item.title} cardDes={item.description} cardDate={item.date} />)}
            </div>
        </div>
    )
}