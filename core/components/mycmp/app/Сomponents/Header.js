import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import cn from 'classname' // не подключилось, подключение нашел ниже
var  cn  =  require('classnames')

import './Header.css'

export default class Header extends Component {

  render () {
    const {
      title,
      userName,
      className,
      //bodyClassName,
      //renderIcon
    } = this.props

    return (
      <div className={cn('Header', className)}>
        <div className={cn('Header-Body')}>
          <div className='flex-1 d-flex flex-row justify-content-start align-items-center'>
            {/*renderIcon && renderIcon()*/}
            <div className='Header-Title'>
              {title}2222
            </div>
          </div>
          
          <div className='flex-1 d-flex flex-row justify-content-end align-items-center'>
            {userName && (
              <div className='Header-UserName'>
                {userName}
              </div>
            )}
            
            <a className='btn btn-primary Header-ExitBtn'>
              Выйти
            </a>
          </div>
          <Link to="/orders.html">Home</Link>
        </div>     


      </div>




    )
  }
}