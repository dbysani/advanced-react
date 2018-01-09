import React from 'react';

import DataApi from '../DataApi.js';
import {data} from '../testData.json';

import ArticleList from './ArticleList';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//import Card = from 'react-material-card'

const api = new DataApi(data)

class App extends React.Component{
	
	constructor(){
		super();
		this.state = {
			articles : api.getArticles(),
			authors : api.getAuthors()
		};
		console.log(this.state)
		
	}

	render(){
		return (
			 <MuiThemeProvider>
			<ArticleList 
			articles={this.state.articles}
			authors={this.state.authors}
			/>
			 </MuiThemeProvider>
			);
	}
}

export default App;