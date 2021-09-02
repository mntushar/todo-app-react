import React, {Component} from 'react'
import '../cse_component/my_style.css'


export default class Card2Style extends Component {
    render() {
        return (
            <div className='myCard'>
                <h3 className='cardTitle'>{this.props.title}</h3>
                <p className='cardDescription'>{this.props.des}</p>
                <p className='cardFooter'>{this.props.date}</p>
            </div>
                
           
        )
    }
}

