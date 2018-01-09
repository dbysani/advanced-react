import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const styles={
	Card:{
		marginBottom:10
	}
}

const displayName = (author)=>{
	return(author.firstName+' '+author.lastName)
}

const ArticleV2 = (props)=>{
	const {article,author} = props
	return(
			<Card initiallyExpanded={true} style={styles.Card}>
				<CardHeader 
				title={article.title} 
				subtitle={displayName(author)} 
				actAsExpander={true} 
				showExpandableButton={true}
				/>
				<CardText expandable={true}>
				{article.body}
				</CardText>
			</Card>
		);
};


export default ArticleV2;