import React from "react";

class Welcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            'name': 'Mario Bros'
        }
    }

    componentDidMount() {
        console.log('================welcome mounted====================');
        console.log('mounted');
        console.log('====================================');
    }

    componentWillUnmount() {
        alert('security  risk');
    }

    render() {
        return (
            <p>Bienvenue { (this.props.name) ? <b>{this.props.name}</b> : <span>{this.state.name}</span> }</p>
        );
    }
}

export default Welcome;