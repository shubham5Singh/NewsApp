import React from 'react';

export const News = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The News Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button
                        className="btn btn-primary"
                        onClick={() => props.getNews()}>Get the news
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>{props.posts}</p>
                </div>
            </div>
        </div>
    );
};