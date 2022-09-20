import React from 'react'
import { ButtonAction } from './ButtonAction'


export const QuoteBox = ({ ramdomQuote, ramdomColor, getAllRamdom, background }) => {

    /*--COLORES PARA TEXTO --*/
    const color = {
        color: ramdomColor
    }

    return (
        <article style={color} className='card'>

            <img className='card__border__quote' src="./src/utils/img/border.png" alt="Imagen de borde para citas" />

            <div className='card__title'>
                <h1 className='card__h1'> <span className='quotation__marks'>“</span>Lo intentas, te equivocas <br />
                    ¿te caes? ¡te levantas! , <br />
                    Lo intentas, te equivocas ¿ te caes? ¡te levantas! ,<br />
                    Lo intentas, te equivocas ¿te caes? ¡te levantas! <br />
                    <br />
                    No importa cuantas veces te caes sino las veces que te levantas<span className='quotation__marks'>”</span> </h1>
            </div>

            <div className='page'>
                <div className='page__lines'></div>
                <div className='page__esquina'></div>
            </div>

            <div className='notebook__back'></div>

            <div className='notebook__circle'>
                <div className='notebook__line'></div>
            </div>

            <div className='container__content'>
                <p className='card__quote'>
                    <span className='quotation__marks'>“</span>
                    {ramdomQuote.quote}
                    <span className='quotation__marks'>”</span>
                </p>
                <h1 className='card__author'>{ramdomQuote.author}</h1>
            </div>

            <ButtonAction background={background} getAllRamdom={getAllRamdom} />

        </article>
    )
}



