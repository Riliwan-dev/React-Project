import React from 'react';

import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--secondary'
]

const SIZES = [
    'btn--small',
    'btn--large'
]

export const Button = {(
    children,
    types,
    Onclick,
    buttonStyle,
    buttonSize
)} => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize ? buttonStyle : SIZES[0]

    return(

    )
}