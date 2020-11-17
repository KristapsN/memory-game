import React from 'react';
import './button.css'


type Props = {
    //   clicked: boolean;
    buttonHandler: () => void;
    start: boolean;
    win: boolean;
    title: string;
    subtitle: string;
    buttonName: string;

}

const Button = ({ buttonHandler, start, win, title, subtitle, buttonName }: Props) => {

    return (

        <div>

            {!start &&

                <div className="button--wrapper__start">
                    <div className="button--content">
            <h1 className="title">{title}</h1>
            <p className="paragraph">{subtitle}</p>
                        <button className="button__start"
                            onClick={() => buttonHandler()}
            >{buttonName}</button>
                    </div>
                </div>
           
                    
                }

            {win === true ? (

                <div className="button--wrapper__start">
                    <div className="button--content">
                        <h1 className="title">Congratulations You Won!</h1>
                        <p className="paragraph">Are you ready to play again?</p>
                        <button className="button__start"
                            onClick={() => buttonHandler()}
                        >Start</button>
                    </div>
                </div>):
                (<div></div>)
            }

        </div>
    )
}
export default Button