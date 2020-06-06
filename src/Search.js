import React,{Component} from "react";


class Search extends Component {

    constructor(props)
    {
        super(props);
        this.cityName=React.createRef();
    }
    search=()=> {
     this.props.search(this.cityName.current.value);
    };



    render() {
        return (
            <div className="flex flex-column justify-center">
                <input type="search" placeholder={"Enter City Name"} id="cityName" className="input-reset ba b--black-20 pa2 mb2 db w-100" ref={this.cityName}/>
                <button onClick={this.search} className="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br2 hover-shadow-inner">Search</button>
            </div>
        )
    }

}

/*const Search = (props) => {
    return (
        <div className="flex flex-column justify-center">
            <input type="search" placeholder={"Enter City Name"} id="cityName"
                   className="input-reset ba b--black-20 pa2 mb2 db w-100"/>
            <button onClick={props.search}
                    className="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br2 hover-shadow-inner">Search
            </button>
        </div>

    )
};*/

export default Search;
