import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import {Main} from './GlobalStyle';


export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}

	updateClicks = () =>{
		this.setState(prevState =>{
			return{ 
      good: prevState.clicks + 1,
      neutral: prevState.clicks + 1,
      bad: prevState.clicks + 1,
    };}
		);
	}
render(){
	return(
		<button onClick={this.updateClicks}> Clicks: {this.state.cliks}</button>
	
	);
	}
}

export const Basics =() => {
	return (
		<div>
			<GlobalStyle />
      <App />
			<App/>
			<App />
		</div>
	)
}
