import React from 'react';
import ReactDOM from 'react-dom';
// import Nav from './nav.jsx';
import Text from './main-text.jsx';
import Elem from './main-elem.jsx';
import Detail from './text-detail.jsx';
import Profiles from './profiles.jsx';
import Triangle from './triangle.jsx';
import Navbar from "./navbar.jsx";



document.addEventListener('DOMContentLoaded',() => {

    class App extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                display:'hidden',
                display2:'show',
                counter:0

            }
        };
        hamburgerClick = () => {
            if (this.state.counter%2===0){
                this.setState({
                    display:'show',
                    display2:'hidden',
                    counter: this.state.counter +1,
                })
            } else{
                this.setState({
                    display:'hidden',
                    display2:'show',
                    counter: this.state.counter +1,
                })
            }

        };

        render() {
            return<div>
                <div className={this.state.display}>
                <Navbar/>
                </div>
            <div className={this.state.display2}>
            <div className='page-background'>
                <header className="page-header">
                    <div className="nav-with-adjustment">
                        <div className='page-mobile-nav'>
                            <div className='logo'>
                                <img src='../dist/assets/logo_awesome.svg' alt='Logo Awesome' />
                            </div>
                            <div className="hamburger" >
                                <img onClick={(e) =>this.hamburgerClick(e)} src='../dist/assets/hamburger_menu.svg' alt='Click Me !'/>
                            </div>
                        </div>
                        <nav className="page-nav">
                            <ul className="page-nav-list">
                                <li><a href="" >Features</a></li>
                                <li><a href="" >Case studies</a></li>
                                <li><a href="" >About</a></li>
                                <li><a href="" >Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <Text/>
                <Elem/>
                <Detail/>
                <Profiles/>
                <Triangle/>


            </div>
            </div>
            </div>
        }
    }

    ReactDOM.render(
        <div>
            <App/>
        </div>,
        document.querySelector('#app')
    );

});
