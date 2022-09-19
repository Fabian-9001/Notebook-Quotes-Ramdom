import React from 'react'

export const ButtonAction = ({ getAllRamdom, background }) => {

    return (
        <button onClick={getAllRamdom} style={background} className='button'>
            &gt;
        </button>
    )
}
