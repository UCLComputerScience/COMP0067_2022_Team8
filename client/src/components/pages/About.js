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
        <h1>Mission Statements</h1>
          <br></br>
          <div>
            <h3>Heading here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin pharetra risus, blandit finibus nibh sollicitudin mollis. Proin rutrum ex eleifend quam finibus mollis. Nam sollicitudin imperdiet justo, eget rutrum nulla laoreet eget. Quisque diam massa, tincidunt vitae tristique in, ornare et felis. Suspendisse sagittis urna tempor, volutpat arcu vitae, vehicula lacus. Maecenas et nibh leo. Donec ac metus neque. In sed neque sit amet ex dictum accumsan. Sed ut nibh non tellus rutrum vehicula a sit amet ex. Nunc non tristique mi, in pellentesque neque. Maecenas quis augue sit amet metus cursus euismod vel at nisl. Curabitur blandit nisi at efficitur fermentum.</p>
          </div>
          <br></br>
          <div>
            <h3>Heading here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin pharetra risus, blandit finibus nibh sollicitudin mollis. Proin rutrum ex eleifend quam finibus mollis. Nam sollicitudin imperdiet justo, eget rutrum nulla laoreet eget. Quisque diam massa, tincidunt vitae tristique in, ornare et felis. Suspendisse sagittis urna tempor, volutpat arcu vitae, vehicula lacus. Maecenas et nibh leo. Donec ac metus neque. In sed neque sit amet ex dictum accumsan. Sed ut nibh non tellus rutrum vehicula a sit amet ex. Nunc non tristique mi, in pellentesque neque. Maecenas quis augue sit amet metus cursus euismod vel at nisl. Curabitur blandit nisi at efficitur fermentum.</p>
          </div>
          <br></br>
          <div>
            <h3>Heading here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin pharetra risus, blandit finibus nibh sollicitudin mollis. Proin rutrum ex eleifend quam finibus mollis. Nam sollicitudin imperdiet justo, eget rutrum nulla laoreet eget. Quisque diam massa, tincidunt vitae tristique in, ornare et felis. Suspendisse sagittis urna tempor, volutpat arcu vitae, vehicula lacus. Maecenas et nibh leo. Donec ac metus neque. In sed neque sit amet ex dictum accumsan. Sed ut nibh non tellus rutrum vehicula a sit amet ex. Nunc non tristique mi, in pellentesque neque. Maecenas quis augue sit amet metus cursus euismod vel at nisl. Curabitur blandit nisi at efficitur fermentum.</p>
          </div>
          <br></br>
          <div>
            <h3>Heading here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin pharetra risus, blandit finibus nibh sollicitudin mollis. Proin rutrum ex eleifend quam finibus mollis. Nam sollicitudin imperdiet justo, eget rutrum nulla laoreet eget. Quisque diam massa, tincidunt vitae tristique in, ornare et felis. Suspendisse sagittis urna tempor, volutpat arcu vitae, vehicula lacus. Maecenas et nibh leo. Donec ac metus neque. In sed neque sit amet ex dictum accumsan. Sed ut nibh non tellus rutrum vehicula a sit amet ex. Nunc non tristique mi, in pellentesque neque. Maecenas quis augue sit amet metus cursus euismod vel at nisl. Curabitur blandit nisi at efficitur fermentum.</p>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Our Partners Lorem</h1>
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