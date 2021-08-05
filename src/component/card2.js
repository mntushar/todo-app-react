import React, {Component, setState} from 'react'
import '../cse_component/style.css'
import Card2Style from './card2_style'
import Data from '../data/card_data.json'


export default class Card2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchItem: ''
        } 
    }
    searchHandle = (event) => {
        this.setState({
            searchItem: event.target.value
        }); 
    }

    render() {
        return (
            <div>
                <div>
                    <h3 style={{textAlign: 'center'}}>Class component</h3>
                </div>
                <input className='searchStyle' type='text' name='search' placeholder='search' onChange={this.searchHandle} />
                <div>
                    {Data.filter((val) => {
                        if (val.title.toLowerCase().includes(this.state.searchItem.toLowerCase())){
                            return <Card2Style title={val.title} des={val.description} date={val.date} />
                        }
                    }).map((item) => <Card2Style title={item.title} des={item.description} date={item.date} />)}
                </div>
            </div>
                
           
        )
    }
}

