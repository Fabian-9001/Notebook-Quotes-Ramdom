import React from 'react'
import { ButtonAction } from './ButtonAction'


export const QuoteBox = ({ ramdomQuote, ramdomColor, getAllRamdom, background }) => {

    /*--COLORES PARA TEXTO --*/
    const color = {
        color: ramdomColor
    }

    return (
        <article style={color} className='card'>
            
            <div className='circle'><div className='line'></div></div>
            <p className='card__quote'>{ramdomQuote.quote}</p>
            <h1 className='card__author'>{ramdomQuote.author}</h1>
            <ButtonAction background={background} getAllRamdom={getAllRamdom} />

        </article>
    )
}



