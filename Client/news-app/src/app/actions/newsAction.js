import  axios  from 'axios';

export function getPost(){
    return {
        type: "GET_NEWS",
        payload : fetch('http://localhost:8000/news')
        .then(result=>{
            return result.json();
        })
        .then(data=>{
            console.log(data.articles);
           return data.articles;
        })
    };
}