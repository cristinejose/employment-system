import React, { Component, Fragment } from 'react';
import '../css/employeeForm.css';
import PropTypes from 'prop-types';


class EmployeeForm extends Component {
    render() {
        return (
            <Fragment >
                <div className= "format">
                <form>
                    <fieldset>
                        <legend> New Employee</legend><br />
                        <div className="inside">

                            First name:<br />
                            <input type="text" name="firstName" onChange={this.props.handleChangeInfo} /><br /><br />
                            Middle name:<br />
                            <input type="text" name="middleName" onChange={this.props.handleChangeInfo} /><br /><br />
                            Last name:<br />
                            <input type="text" name="lastName" onChange={this.props.handleChangeInfo} /><br /><br />
                            Birthdate:<br />
                            <input type="text" name="bDay" onChange={this.props.handleChangeInfo} /><br /><br />
                            Position:<br />
                            <input type="text" name="position" onChange={this.props.handleChangeInfo} /><br /> <br />

                            <button type="button" onClick={this.props.handleAddEmployee} className="submit_button" >Add</button>
                        </div>
                    </fieldset>
                </form>
                </div>
            </Fragment>
        );
    }
}


EmployeeForm.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddEmployee: PropTypes.func
}

export {
   EmployeeForm
}