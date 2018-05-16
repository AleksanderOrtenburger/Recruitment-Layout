import React from 'react';
import ReactDOM from 'react-dom';

export default class Profiles extends React.Component {

    render() {
        return <div className='profiles'>
            <div className='profile1'>
            <object type='image/svg+xml' data='../dist/assets/fb.svg'> </object><p>/Awesome</p>
            </div>
            <div className='profile2'>
                <object type='image/svg+xml' data='../dist/assets/twitter.svg'> </object><p>/Awesome</p>
            </div>
            <div className='profile3'>
                <object type='image/svg+xml' data='../dist/assets/google+.svg'> </object><p>/Awesome</p>
            </div>
        </div>
    }
}