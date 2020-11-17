import React from 'react';
import "./card.css"



type Props = {
    id: number;
    value: string;
    opened: boolean;
    clickHandler: () => void;
    checked: boolean;
    counted: boolean;

}

const Card = ({ id, value, opened, clickHandler, checked }: Props) => {

    return (

        

        <div className="col-md-3 cards--wraper">
            {!checked ? (<div>
                {opened ? (<div className="card--open" >
                   <img className="card" src={value} alt=""/> 
                </div>) :
                    (<div className="card--open" onClick={() => clickHandler()}>

                    </div>)} </div>) :
                (<div className="card--open">
                    <img className="card" src={value} alt=""/> 
                </div>
                )}
        </div>
    )
}
export default Card