import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/compensationTable.css';

class CompensationTable extends Component {

    render() {

        return (
            <Fragment>
                <div>
                    <header className="table_header" >
                        List of Compensations
                    </header>
                    <table className='compensation-table'>
                        <tbody>
                            <tr className='compensation-table-row'>
                                <th className='compensation-table-cell'>Employee ID</th>
                                <th className='compensation-table-cell'>MONTH</th>
                                <th className='compensation-table-cell'>SALARY</th>
                                <th className='compensation-table-cell'>BONUS</th>
                                <th className='compensation-table-cell'>COMMISSION</th>
                                <th className='compensation-table-cell'></th>
                                <th className='compensation-table-cell'></th>
                                
                            </tr>
                            {
                                this.props.compensationList.map((compensation, id_comp) => {
                                    return (
                                        <tr className='compensation-table-content' key={compensation.id_comp}>
                                            <td className='compensation-table-cell'> {compensation.id_comp}</td>
                                            <td className='compensation-table-cell'> {compensation.month} </td>
                                            <td className='compensation-table-cell'>{compensation.salary}</td>
                                            <td className='compensation-table-cell'>{compensation.bonus}</td>
                                            <td className='compensation-table-cell'>{compensation.commission}</td>
                                            <td className='compensation-table-cell'><button type='button' onClick={this.props.editCompensation}>Edit</button></td>
                                            <td className='compensation-table-cell'><button type='button' onClick={() => this.props.deleteCompensation(id_comp)}>Delete</button></td>
                                            
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}

CompensationTable.propTypes = {
    editCompensation: PropTypes.func,
    deleteCompensation: PropTypes.func

}

export {
    CompensationTable
};