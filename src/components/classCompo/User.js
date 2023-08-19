import React from "react"
import { Button } from "reactstrap";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    plus = () =>  {
        this.setState({count: this.state.count + 1});
    }

    minus = () => {
        this.setState({count: this.state.count - 1});
    }

    componentDidMount() {
        setInterval(() => {
            this.plus();
        }, 1000);
    }

    render() {
        return (
            <div>
                <Button onClick={this.minus}>-</Button>
                <p className="fs-4 d-inline-block px-3">{this.state.count}</p>
                <Button onClick={this.plus}>+</Button>
                <h1>name: {this.props.name}, age: {this.props.age}</h1>
            </div>
        )
    }
}

export default User;