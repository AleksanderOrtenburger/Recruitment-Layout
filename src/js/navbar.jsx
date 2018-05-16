import React from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends React.Component {

    render() {
        return <div className='navbar'>
            <div className="navbar-header">
                <div className='navbar-logo'>
                    <img src='../dist/assets/logo_awesome.svg' alt='Logo Awesome' />
                </div>
                <div className="iks" >
                    <a href=""><img  src='../dist/assets/iks.svg' alt='Click Me !'/></a>
                </div>
            </div>
            <div className="navbar-menu">

                    <div className='navbar-features'><p >Features</p></div>
                    <div className='navbar-case'><p >Case studies</p></div>
                    <div className='navbar-about'><p >About</p></div>
                    <div className='nav-button'><button>Contact</button></div>


            </div>
            <div className="navbar-icons">
                <div className='fb'>
                    <object type='image/svg+xml' data='../dist/assets/fb.svg'> </object>
                </div>
                <div className="twitter">
                    <object type='image/svg+xml' data='../dist/assets/twitter.svg'> </object>
                </div>
                <div className="googlePlus">
                    <object type='image/svg+xml' data='../dist/assets/google+.svg'> </object>

                </div>
            </div>

        </div>
    }
}