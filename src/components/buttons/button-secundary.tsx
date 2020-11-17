import React from 'react';
import './button.css'


type Props = {
    //   clicked: boolean;
    buttonHandler: () => void;
    buttonName: string;

}

const ButonSec = ({ buttonHandler,  buttonName }: Props) => {

    return (

        <div>

           

             
                        <button className="button__start button__restart"
                            onClick={() => buttonHandler()}
            >{buttonName}</button>
                   
              
           
                    
              
         

        </div>
    )
}
export default ButonSec