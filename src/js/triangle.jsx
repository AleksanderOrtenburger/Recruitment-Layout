import React from 'react';
import ReactDOM from 'react-dom';

export default class Triangle extends React.Component {

    render() {
        return <section className='site-triangle'>
            <div className='triangle'>
                <div className='triangle-plus'><p>+</p></div>
                <div className='triangle-more'><p>MORE</p></div>
            </div>
        </section>


    }
}