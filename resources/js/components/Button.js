import React from 'react'
import PropTypes from 'prop-types'

const Button = ({onClick}) => {
    return (
        <div>
            <button onClick={onClick} className="btn btn-dark ml-5">Show Add Menu</button>
        </div>
    )
}

Button.propTypes ={
    onClick :PropTypes.func
}


export default Button
