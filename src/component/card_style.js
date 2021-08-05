import react from 'react'
import '../cse_component/style.css'


export default function CardStyle(props){
    return(
        <div className='card'>
            <h3 className='cardTitle'>{props.cardTitle}</h3>
            <p className='cardDescription'>{props.cardDes}</p>
            <p className='cardFooter'>{props.cardDate}</p>
        </div>
    )
        
}