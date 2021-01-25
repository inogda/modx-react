import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import cn from 'classname' // не подключилось, подключение нашел ниже
var  cn  =  require('classnames')

import './Header2.css'

//var  bn  =  require('classnames')


export default class Header2 extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      text: "Please Click me!",
      clickCount: 0
    };
    this.updateCount = this.updateCount.bind(this);
  }
  // Method updateCount()
  updateCount() {
    this.setState((prevState, props) => {
      return {
        clickCount: prevState.clickCount + 1,
        text: "Clicked"
      };
    });
  }

  render () {

    //this.updateCount();

    const { // чтобы заменить ссылки в return ниже {this.props.title} на {title}, которые получаем при вызове <Header2 title='Title' />
      title,
      userName,
      className,
    } = this.props



    return (

      
      <div className={cn('Header', className)}>
        <div className={cn('Header-Body')}>
          <div className='flex-1 d-flex flex-row justify-content-start align-items-center'>
            {/*renderIcon && renderIcon()*/}
            <div className='Header-Title'>

            <button onClick={this.updateCount}>Click me!</button>

      <button onClick={() => this.updateCount()}>
        {this.state.text} : {this.state.clickCount}
      </button>

              {title}2222 - {this.state.text} : {this.state.clickCount}
              
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
// ниже задаем переменные по умолчанию
Header2.defaultProps = {title: "Tom", userName: 22};