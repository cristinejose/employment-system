import React, { Component } from 'react';
import '../css/sidebar.css';


class Sidebar extends Component {
    render() {
        return (

            <div className="sidebar">
                <a href={"/form.jsx"}>Add Employee </a>
                <a href={"/table.jsx"}>View Employee List</a>
                <a href="#contact">Add Compensation</a>
                <a href="#about">View Compensation Details</a>
            </div>
            );
        }
    }
export default Sidebar;