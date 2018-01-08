import React from 'react';
import ReactDOM from 'react-dom';


// const App = () => (
// 	<h2>Hello React!!!</h2>
// );

class App extends React.Component{
	
	state = {
		answer:123,
	}

	asyncFunc = ()=>{
		return Promise.resolve(654)
	}

	async componentDidMount(){
		this.setState({
			answer: await this.asyncFunc()
		});
	}

	render(){
		return (
			<h2> Hello class components {this.state.answer}</h2>
			);
	}
}



ReactDOM.render(
	//<h2>Hello React</h2>,document.getElementById('root')
	<App/>,document.getElementById('root')
);