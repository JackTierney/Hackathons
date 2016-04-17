import React from 'react'
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import Form from './Form/index.js'


import '../../scss/style.scss'

const options = {
  menuItems: ['about', 'contact'],
  logoUrl: '/img/63-shelter.png'
}

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header menuItems={options.menuItems} logoUrl={options.logoUrl} fluid />
        <div className='header-spacing'></div>
          {this.props.children}
        <Footer logoUrl={options.logoUrl} />
      </div>
    )
  }
}
