import React from 'react'
import PropTypes from 'prop-types'
import Button  from './Button'

//Function
const Header = ( {title} ) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <div>
            <h1> {title} </h1>
            <Button color='green' text='Add' onClick={onClick} />
        </div>
    )
}

//Default Value
Header.defaultProps = {
    title: 'Task Tracker',
}

//Type Checker
Header.propTypes = {
    title: PropTypes.string,
}

//Styling
//CSS in JS
// <h1 style = {headingStyle}> {title} </h1>
/* const headingStyle = {
    color: 'white',
    backgroundColor: 'black',
}
 */
export default Header
