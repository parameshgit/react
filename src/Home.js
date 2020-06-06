import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href={"/home"}>Home</a></li>
                        <li><a href={"/weather"}>Weather</a></li>
                        <li><a href={"/news"}>News</a></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>

        )
    }
}

export default Header;
