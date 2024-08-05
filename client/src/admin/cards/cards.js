import React from 'react';
import {CardsData} from "../Data.js";
import Card from '../cardComp/Card.jsx';

function Cards() {
  return (
    <div className='Cards flex flex-wrap justify-around'>
      {CardsData.map((card, id)=>{
        return (
            <div className='parentContainer  mt-6 mx-3' key={id}>
                
                <Card
                title={card.title}
                barValue={card.barValue}
                totalValue={card.totalValue}
                completeValue={card.completeValue}
                icon={card.icon}
                series={card.series}
                background={card.background}
                />

            </div>
        );
      })}
    </div>
  )
}

export default Cards;
