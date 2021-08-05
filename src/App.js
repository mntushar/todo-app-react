import react  from 'react';
import HeardTitle from './component/heardTitle'
import Card from './component/card'
import Card2 from './component/card2'
import Data from './data/card_data.json'


export default function App() {
  return (
    <div className='body'>
      <HeardTitle />
      <div>
        <Card />
      </div>
      <div>
        <Card2 />
      </div>
      
    </div>
  );
}


