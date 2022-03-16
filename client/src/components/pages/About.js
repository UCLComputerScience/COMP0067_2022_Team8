import React from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import './Partners.css';
import './Mission.css';

export default function About() {

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='about'>About</div>
      <div className='about-tabs'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          centered
          allowScrollButtonsMobile
          aria-label="basic tabs"
          >
          <Tab icon={<InfoIcon />} label="Mission Statements"  {...a11yProps(0)} />
          <Tab icon={<PeopleIcon />} label="Our Partners" {...a11yProps(1)} />
          <Tab icon={<MenuBookIcon />} label="Brochure" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel className="mission-statements" value={value} index={0}>
      <div>
            <div class="title_con">
                <h1 class="title">Mission Statement</h1>
            </div>
            <div class="middle_panel">
                <div class="mission_des">
                    <p>IXN for Good is an organisation enabling charities small and large to work with university students on projects as part of the Industry Exchange Network methodology developed at UCL Computer Science. Since 2018, The IXN for Good programme has embarked on a mission with NGOs and charities to advance technology with the betterment of humanity in mind and in line with the Global Tech for Good movement. They focus on proof-of-concept prototypes to solve real-world problems for NGO’s and charities. There are currently 12 universities in the UK that run IXNs in partnership with leading organisations. </p>
                    <p>The IXN for Good aims to help all industries involved in health and the Global Sustainable Development Goals(SDGs), including topics like Poverty, Zero Hunger, and Climate Change.</p>
                </div>
            </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
            <div class="title_con">
                <h1 class="title">Our Partner</h1>
            </div>
            <div class="item_row">
                <a href="https://www.ibm.com/uk-en">
                    <div class="item_img">
                        <img class="par_img" src="/images/1.jpg"/>
                        <p class="par_name">IBM</p>
                    </div>
                </a>
                <a href="https://www.intel.co.uk/content/www/uk/en/homepage.html">
                    <div class="item_img">
                        <img class="par_img" src="/images/2.jpg"/>
                        <p class="par_name">Intel</p>
                    </div>
                </a>
                <a href="https://www.microsoft.com/">
                    <div class="item_img">
                        <img class="par_img" src="/images/3.jpeg"/>
                        <p class="par_name">Microsoft</p>
                    </div>
                </a>
                <a href="https://www.avanade.com/">
                    <div class="item_img">
                        <img class="par_img" src="/images/4.jfif"/>
                        <p class="par_name">Avanade</p>
                    </div>
                </a>
            </div>
            <div class="item_row">
                <a href="https://www.nttdata.com/global/en/">
                    <div class="item_img">
                        <img class="par_img" src="/images/5.jfif"/>
                        <p class="par_name">NTT Data</p>
                    </div>
                </a>
                <a href="https://www.gosh.nhs.uk/">
                    <div class="item_img">
                        <img class="par_img" src="/images/6.jfif"/>
                        <p class="par_name">Great Ormond Street</p>
                     </div>
                </a>
                <a href="https://aws.amazon.com/">
                    <div class="item_img">
                        <img class="par_img" src="/images/7.jfif"/>
                        <p class="par_name">Amazon AWS</p>
                    </div>
                </a>
            </div>
        </div>
      </TabPanel>
      <TabPanel className="brochure" value={value} index={2}>
        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=tki293pvxn" width="100%" height="1200px" seamless="seamless" scrolling="no" frameborder="0" allowfullscreen=""></iframe>
      </TabPanel>
      </div>
    </> 
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}