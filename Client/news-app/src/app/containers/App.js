import React from 'react';
import { connect } from 'react-redux';
import { News } from '../components/News';
import { getPost } from '../actions/newsAction';

class App extends React.Component{
    constructor(props){
        super(props);
        // console.log('props'+ props.news.articles[0]);
    }

    // componentDidMount(){
    //   this.props.getPost();
    // }
    render(){
        return (
            <div className="container">
            <News getNews={()=>this.props.getPost()} posts={this.props.news}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        news: state.news
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        getPost : ()=>{
            dispatch(getPost());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);    