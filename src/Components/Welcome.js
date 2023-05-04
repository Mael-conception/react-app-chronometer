import React from "react";

class Welcome extends React.Component {

    render() {
        return <p>Bienvenue {this.props.name}</p>
    }
}

export default Welcome;