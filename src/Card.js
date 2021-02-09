import React from 'react';
import './index.css';
import Heading from './Heading';
import Image from './Image';

function Card(props) {
    return (
        <div className="cards">
            <div className="card">
               <Image source={props.imgsrc} />
                <div className="card-info">
                    <span className="card-category">{props.cardtitle}</span>
                    <Heading fname={props.sname} />
                    <a href={props.link}>
                        <button>Watch Now</button>
                    </a>
                </div>

            </div>

        </div>);

}


   export default Card;