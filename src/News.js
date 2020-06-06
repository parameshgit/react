import React, {Component} from 'react';


class News extends Component {
    constructor() {
        super();
        this.state = {
            indiaTop: []
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=c51e7d20e9ba463ba2e12745922a3b73')
            .then(reponse => reponse.json())
            .then(data => data.articles)
            .then(arrayData => this.setState({indiaTop: arrayData}));
    }


    render() {
        console.log(this.state.indiaTop.length);
        if (this.state.indiaTop.length === 0) {
            return (<div className="news"><img className={'loadingImage'} src="data:image/png;base64,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"></img></div>);

        } else {
            const arrayTop = this.state.indiaTop.map((article, index) => <li key={index} className="article">
                <div className="article_div">
                    <em className="title">{article.title}</em>
                    <img src={article.urlToImage} alt='none'/>
                    <p>{article.description}</p>
                    <p>click <a href={article.url}>here</a> to see more</p>
                </div>
            </li>);
            return (<ul className="news">
                {
                    arrayTop
                }
            </ul>);
        }
    }


}

export default News;
