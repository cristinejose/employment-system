import React, { Component } from 'react';
import '../css/sidebar.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from './home.jsx';

import AddEmployee from './addEmployee.jsx';
import ViewEmployee from './viewEmployee.jsx';
import AddCompensation from './addCompensation.jsx';
import ViewCompensation from './viewCompensation.jsx';


class Sidebar extends Component {


    render() {
        return (
            <HashRouter>
                
                    <ul className="sidebar">
                        <li><NavLink to='/home'>HOME</NavLink></li>
                        <li><NavLink to='/addEmployee'>ADD EMPLOYEE</NavLink></li>
                        <li><NavLink to='/viewEmployee'>VIEW EMPLOYEES</NavLink></li>
                        <li><NavLink to='/addCompensation'>ADD COMPENSATION</NavLink></li>
                        <li><NavLink to='/viewCompensation'>VIEW COMPENSATIONS</NavLink></li>



                    </ul>

                    <div>
                        <Route path='/home' component={Home} />
                        <Route path='/addEmployee' component={AddEmployee} />
                        <Route path='/viewEmployee' component={ViewEmployee} />
                        <Route path='/addCompensation' component={AddCompensation} />
                        <Route path='/viewCompensation' component={ViewCompensation} />


                    </div>
                
            </HashRouter>

        );
    }
}


export default Sidebar;