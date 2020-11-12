import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';


export const CardList = props => (  // Functional component
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);
