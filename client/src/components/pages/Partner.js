import React from 'react';
import '../../App.css';
import './partner.css';

export default function Partner() {
    return (
        <div>
            <div class="title_con">
                <h1 class="title">Our Partner</h1>
            </div>
            <div class="item_row">
                <a href="https://www.ibm.com/uk-en">
                    <div class="item_img">
                        <img class="par_img" src={require("../images/1.jpg")}/>
                        <p class="par_name">IBM</p>
                    </div>
                </a>
                <a href="https://www.intel.co.uk/content/www/uk/en/homepage.html">
                    <div class="item_img">
                        <img class="par_img" src={require("../images/2.jpg")}/>
                        <p class="par_name">Intel</p>
                    </div>
                </a>
                <a href="https://www.microsoft.com/">
                    <div class="item_img">
                        <img class="par_img" src={require("../images/3.jpeg")}/>
                        <p class="par_name">Microsoft</p>
                    </div>
                </a>
                <a href="https://www.avanade.com/">
                    <div class="item_img">
                        <img class="par_img" src={require("../images/4.jfif")}/>
                        <p class="par_name">Avanade</p>
                    </div>
                </a>
            </div>
            <div class="item_row">
                <a href="https://www.nttdata.com/global/en/">
                    <div class="item_img">
                        <img class="par_img" src={require("../images/5.jfif")}/>
                        <p class="par_name">NTT Data</p>
                    </div>
                </a>
                <a href="https://www.gosh.nhs.uk/">
                    <div class="item_img">
                        <img class="par_img" src={require("../images/6.jfif")}/>
                        <p class="par_name">Great Ormond Street</p>
                     </div>
                </a>
                <a href="https://aws.amazon.com/">
                    <div class="item_img">
                        <img class="par_img" src={require("../images/7.jfif")}/>
                        <p class="par_name">Amazon AWS</p>
                    </div>
                </a>
            </div>
        </div>
    )
}