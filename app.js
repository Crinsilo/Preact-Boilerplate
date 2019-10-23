import {h, render, Component } from 'preact';
import './index.css';
import Welcome from './Components/Welcome';


class HelloPreact extends Component {
	render() {
		return (
    <div>
      <Welcome />
      <div>Modify as you wish!</div>
    </div>
    )
	}
}

render(<HelloPreact />, document.getElementById('root'));
