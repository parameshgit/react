import React, {Component} from 'react';
import './App.css';
import Search from './Search';
import './index.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            currentCity: '',
            currentWeatherData: '',
            error: ''
        }
        this.cityName = React.createRef();
    }


    searchCityWeather = (cityName) => {

        this.setState({currentWeatherData: '', error: ''})

        //let cityName = document.getElementById("cityName").value;
        console.log("cityName:" + cityName);
        if (cityName === undefined || cityName.length === 0) {
            this.setState({error: 'City Name must not be empty'});
            return;
        } else {
            this.setState({currentCity: cityName});
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=3fa722585d044f7f6fc588d9cf92842a")
                .then(reponse => reponse.json())
                .then(data => {
                    // console.log(data);
                    const {cod} = data;

                    console.log("Message Printed:" + cod);
                    if (cod === '404') {
                        console.log('setting state for error');
                        this.setState({error: "City Name Not Found"});
                        this.setState({
                            currentWeatherData: ''
                        });
                    } else {
                        this.setState({
                            currentWeatherData: data
                        });
                    }
                })
                .catch(error => "error");
            //console.log('request has been completed');
            console.log("current weather data:" + this.state.currentWeatherData);

        }
    };

    componentDidMount() {

    }

    convert(temp) {
        if (temp !== undefined)
            return (temp - 273.15).toFixed(2);
    }

    componentDidUpdate() {
    }

    render() {


        if (this.state.currentWeatherData === undefined) {
            return (
                <div className="wrapper">
                    <div>Loading</div>
                </div>
            )
        } else if (this.state.error.length !== 0) {
            return (
                <div className="wrapper">
                    <div className="login-container">
                        <div>
                            <Search search={this.searchCityWeather}/>
                        </div>
                        <div id="error">
                            {this.state.error}
                        </div>
                    </div>
                </div>
            )


        } else if (this.state.currentWeatherData && this.state.error.length === 0) {
            console.log('Error lenght weather:' + this.state.currentWeatherData);
            console.log('Error lenght:' + this.state.currentWeatherData.length);
            console.log('inside ................');
            return (
                <div className="wrapper">
                    <div className="login-container">
                        <Search search={this.searchCityWeather}/>
                        <div>
                            <table className="zigzag">
                                <tbody>
                                <tr>
                                    <td>Temperature</td>
                                    <td>
                                        {this.state.currentWeatherData.main ? this.convert(this.state.currentWeatherData.main.temp) + '°C' : ''}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td>{this.state.currentWeatherData.main ? (this.state.currentWeatherData.main.humidity) + '%' : ''}</td>
                                </tr>
                                <tr>
                                    <td>Clouds</td>
                                    <td>{this.state.currentWeatherData.weather ? this.state.currentWeatherData.weather[0].description : ''}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )


        } else {
            return (
                <div className="wrapper">
                    <div className="login-container">
                        <div>
                            <Search search={this.searchCityWeather}/>
                        </div>

                    </div>
                </div>
            )
        }

    }

}

export default App;
