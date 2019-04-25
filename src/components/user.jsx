import React, { Component } from 'react';
import PropTypes from 'prop-types';


class User extends Component {

    render() {
        return (
            <div >{this.props.lastName}
                <p>{this.props.id} {this.props.firstName} </p>
            </div>
        );
    }
}

User.propTypes = {
    id : PropTypes.long,
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    bDay: PropTypes.string,
    position: PropTypes.string
}

export default User;

