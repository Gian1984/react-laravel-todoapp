import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'




const Header = ({title, onAdd}) => {

    const onClick = () => {
        console.log(click)
    }

    return (
        <header>
            <div className="row mx-auto">
                <h1>{title}</h1>
                <Button onClick={onAdd}/>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



export default Header
