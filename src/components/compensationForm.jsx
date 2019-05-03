import React, { Component, Fragment } from 'react';
import '../css/compensationForm.css';
import PropTypes from 'prop-types';
import {myFunction} from '../util/popup.js';


class CompensationForm extends Component {
    render() {
        return (
            <Fragment >
                <div className="format">
                    <form>
                        <fieldset>
                            <legend> Add Employee's Compensation</legend><br />
                            <div className="inside">

                                Id:<br />
                                <input type="text" name="id_comp" onChange={this.props.handleChangeInfo} placeholder="Enter employee's Id..."/><br /><br />
                                Month:<br />
                                <input type="text" name="month" onChange={this.props.handleChangeInfo} placeholder ="Enter month..." /><br /><br />
                                Salary:<br />
                                <input type="text" name="salary" onChange={this.props.handleChangeInfo} placeholder ="Enter salary..." /><br /><br />
                                Bonus:<br />
                                <input type="text" name="bonus" onChange={this.props.handleChangeInfo} placeholder ="Enter bonus..." /><br /><br />
                                Commission:<br />
                                <input type="text" name="commission" onChange={this.props.handleChangeInfo} placeholder ="Enter commission..."/><br /><br />

                            <div>
                                <button type="button" onClick={this.props.handleAddCompensation} className="submit_button" classId="popup" onClick={myFunction} > Add</button>
                                <span className="popuptext" id="myPopup"> Compensation Successfuly Added! </span>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </Fragment>
        );
    }
}


CompensationForm.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddCompensation: PropTypes.func,
}


export {
    CompensationForm
}