import React from 'react';
import ReactDOM from 'react-dom';

export default class Elem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translate:'',
            counter:0

        }
    };
    rotateClick = () => {
        if (this.state.counter%2===0){
            this.setState({
                translate:'translated',
                counter: this.state.counter +1,
            })
        } else{
            this.setState({
                translate:'',
                counter: this.state.counter +1,
            })
        }

    };

    render() {
        return <section className='main-elem'><div className={`main-elem-object` }  >
            <object className={this.state.translate} onClick={e =>this.rotateClick(e)}  type='image/svg+xml' data='../dist/assets/kolko_kwadrat.svg' >
                </object>

        </div>

        </section>
    }
}