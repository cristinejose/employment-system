import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/compensationTable.css';
import { searchComp } from '../util/search.js';
import { showRow_comp } from '../util/view.js';
import { editRow_comp } from '../util/edit.js';

class CompensationTable extends Component {

    render() {

        return (
            <Fragment>
                <div>

                    <div>

                        <form className="comp">

                            <strong> <p > COMPENSATION BREAKDOWN</p> </strong>
                            <div classId="data" >

                                EMPLOYEE ID:
                                 <input className="box" id="id" /> <br /> <br />
                                MONTH:
                                <input className="box" id="month" /><br />  <br />
                                SALARY:
                                  <input className="box" id="salary" /><br />  <br />
                                BONUS:
                                 <input className="box" id="bonus" /><br /> <br />
                                COMMISSION:
                                <input className="box" id="commission" /> <br /> <br />
                                TOTAL:
                                 <input className="box" id="total" /> <br />  <br />

                            </div>
                            <button className="edit_button" type='button' onClick={editRow_comp}>Edit</button>

                        </form>

                    </div>

                    <div className="search-container-comp">
                        <input id="myInput" type="text" placeholder="Search Employee ID here..." className="search" onKeyUp={searchComp} />
                    </div>

                    <table className='compensation-table' id="MyTable">
                        <thead>
                            <tr className='compensation-table-row'>
                                <th className='compensation-table-cell'>EMPLOYEE ID</th>
                                <th className='compensation-table-cell'>MONTH</th>
                                <th className='compensation-table-cell'>SALARY</th>
                                <th className='compensation-table-cell'>BONUS</th>
                                <th className='compensation-table-cell'>COMMISSION</th>
                                <th className='compensation-table-cell'>TOTAL</th>
                                <th className='compensation-table-cell'>ACTION</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.compensationList.map((compensation, id_comp) => {
                                    return (
                                        <tr className='compensation-table-content' key={compensation.id_comp} onClick={showRow_comp}>
                                            <td className='compensation-table-cell'> {compensation.id_comp}</td>
                                            <td className='compensation-table-cell'> {compensation.month} </td>
                                            <td className='compensation-table-cell'>{compensation.salary}</td>
                                            <td className='compensation-table-cell'>{compensation.bonus}</td>
                                            <td className='compensation-table-cell'>{compensation.commission}</td>
                                            <td className='compensation-table-cell'>{(+compensation.salary) + (+compensation.bonus) + (+compensation.commission)}</td>

                                            <td className='compensation-table-cell'>
                                                <button type='button' onClick={() => this.props.deleteCompensation(compensation.id_comp)}>Delete</button>
                                            </td>

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