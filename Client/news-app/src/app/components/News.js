import React from 'react';
import './News.css';

export const News = (props) => {
	return (
		<div>
			<div className="row">
				<div className="col-xs-12 heading">
					<h1>News Today</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12">
					<div>{props.posts.map((post, index) => {
						if (post.description && post.urlToImage) {
							return (
								<div className="row post" key={index}>
									<div className="col-sm-4">
										<img className="img-thumbnail" src={post.urlToImage} alt={post.title} />
									</div>
									<div className="col-sm-8">
										<div className="row post-title">
											<a href={post.url} target="_blank">{post.title}</a>
										</div>
										<div className="row description">
											<p>{post.description}</p>
										</div>
										<div className="row souce">
											<p>Source: {post.source.name}</p>
										</div>
									</div>
								</div>
							)
						}
						return <div>No data avialble now</div>
					})}
					</div>
				</div>
			</div>
		</div>
	);
};