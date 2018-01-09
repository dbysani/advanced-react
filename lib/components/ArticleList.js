
import React from 'react';
import Article from './Article';
import ArticleV2 from './ArticleV2';
//import Grid from 'material-ui/Grid';
//import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
//import ReactDOM from 'react-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const ArticleList = (props)=>{


	return(
		<div>
		{Object.values(props.articles).map(article=>
				<ArticleV2
				key={article.id}
				article={article}
				author={props.authors[article.authorId]}
			 	/>
			)}
		</div>
		);
};



export default ArticleList;

