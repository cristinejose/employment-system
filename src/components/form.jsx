import React, { Component, Fragment } from 'react';
import '../css/form.css';
import PropTypes from 'prop-types';

class Form extends Component {
    render() {
        return (
            <Fragment>
                <form>
                <fieldset>
               <legend> New Employee</legend><br/>
                <div className="inside">
                     Employee ID:<br/>
                    <input type="text" name="employeeId" onChange={this.props.handleChangeInfo} /><br/><br/>
                     First name:<br/>
                    <input type="text" name="firstname" onChange={this.props.handleChangeInfo}/><br/><br/>
                    Middle name:<br/>
                    <input type="text" name="middlename" onChange={this.props.handleChangeInfo} /><br/><br/>
                     Last name:<br/>
                     <input type="text" name="lastname" onChange={this.props.handleChangeInfo}/><br/><br/>
                     Birthdate:<br/>
                     <input type="date" name="bday" onChange={this.props.handleChangeInfo}/><br/><br/>
                    Position:<br/>
                    <input type="text" name="position" onChange={this.props.handleChangeInfo}/><br/> <br/>
                   
                    <button type="button" onClick={this.props.handleAddUser} className="submit_button" >Add</button>
                 </div>
                </fieldset>
                </form>
            </Fragment>
            );
        }
    }

    Form.propTypes = {
        handleChangeInfo: PropTypes.func,
        handleAddUser: PropTypes.func
    }

export {
    Form
}