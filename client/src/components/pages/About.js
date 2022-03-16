import React from 'react';
import '../../App.css';
import './about.css';
import {Link} from "react-router-dom";

export default function About() {
    return (
        <div class="about_con">
            <div class="left_panel">
                <ul class="btn_list">
                    <Link to='/about'><li><a>About Us</a></li></Link>
                    <Link to='/partners'><li><a>Our Partners</a></li></Link>
                    <Link to='/mission'><li><a>Mission Statements</a></li></Link>
                    <Link to='/brochure'><li><a>Brochure</a></li></Link>
                </ul>
            </div>
            <div class="right_panel">
                <div class="des">
                    <p>IXN for Good is an organisation enabling charities small and large to work with university students on projects as part of the Industry Exchange Network methodology developed at UCL Computer Science. Since 2018, The IXN for Good programme has embarked on a mission with NGOs and charities to advance technology with the betterment of humanity in mind and in line with the Global Tech for Good movement. They focus on proof-of-concept prototypes to solve real-world problems for NGO’s and charities. There are currently 12 universities in the UK that run IXNs in partnership with leading organisations. </p>
                    <p>The IXN for Good aims to help all industries involved in health and the Global Sustainable Development Goals(SDGs), including topics like Poverty, Zero Hunger, and Climate Change.</p>
                </div>
            </div>
        </div>
    )
}