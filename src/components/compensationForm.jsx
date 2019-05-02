import React, { Component, Fragment } from 'react';
import '../css/compensationForm.css';
import PropTypes from 'prop-types';


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
                                <input type="text" name="id_comp" onChange={this.props.handleChangeInfo} /><br /><br />
                                Month:<br />
                                <input type="text" name="month" onChange={this.props.handleChangeInfo} /><br /><br />
                                Salary:<br />
                                <input type="text" name="salary" onChange={this.props.handleChangeInfo} /><br /><br />
                                Bonus:<br />
                                <input type="text" name="bonus" onChange={this.props.handleChangeInfo} /><br /><br />
                                Commission:<br />
                                <input type="text" name="commission" onChange={this.props.handleChangeInfo} /><br /><br />

                                <button type="button" onClick={this.props.handleAddCompensation} className="submit_button" >Add</button>
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
    handleAddCompensation: PropTypes.func
}

export {
    CompensationForm
}