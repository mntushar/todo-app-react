import react from 'react'
import '../cse_component/my_style.css'


export default function CardStyle(props){
    return(
        <div className='myCard'>
            <h3 className='cardTitle'>{props.cardTitle}</h3>
            <p className='cardDescription'>{props.cardDes}</p>
            <p className='cardFooter'>{props.cardDate}</p>
        </div>
    )
        
}