import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
import Home from '../Templates/Home'
import Header2 from '../Сomponents/Header2'

const title = 'Приёмы555'


export default class About extends Component {
    render () {
      return (
        <div className='Home'>2222

                    <Header2
                        title={title}
                        //title='Title'
                        userName='Иванов Иван Иванович'
                        className='Home-Header'
                        //renderIcon={() => ( <House className='Header-Icon'/> )}
                    />

3333

            <Link to="/orders.html">Home</Link>
            About page 222
        </div>
      )
    }
}