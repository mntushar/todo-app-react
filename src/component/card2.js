import React, {Component, setStat, Fragment} from 'react'
import '../cse_component/my_style.css'
import Card2Style from './card2_style'
import Data from '../data/card_data.json'
import Navbar from './navbar';


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
            <Fragment>
                <Navbar />
                <h3 style={{textAlign: 'center', marginTop:'10px'}}>Class component</h3>
                <input className='searchStyle' type='text' name='search' placeholder='search' onChange={this.searchHandle} />
                
                {Data.filter((val) => {
                    if (val.title.toLowerCase().includes(this.state.searchItem.toLowerCase())){
                        return <Card2Style title={val.title} des={val.description} date={val.date} />
                    }
                }).map((item) => <Card2Style title={item.title} des={item.description} date={item.date} />)}
                
            </Fragment>
                
           
        )
    }
}

