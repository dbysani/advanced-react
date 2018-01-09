
import React from 'react';
import Article from './Article';
//import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


const ArticleList = (props)=>{
	return(
		<div>
		{
			Object.values(props.articles).map(article=>
			
			<Card key={article.id}>
				<CardHeader 
				title={article.title} 
				subtitle={props.authors[article.authorId].firstName} 
				actAsExpander={true} 
				showExpandableButton={true}
				/>
				<CardText expandable={true}>
				{article.body}
				</CardText>
			</Card>
			 
			)
		}
		</div>
		);
};

export default ArticleList;

