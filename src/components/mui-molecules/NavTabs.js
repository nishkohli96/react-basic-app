import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';

/* Import Tab Content Components */
import Container from './Container';
import FolderList from './FolderList';
import TableOptions from './TableOptions';
import CustomExpPanel from './CustomExpPanel';

import Chips from '../Mui-Atoms/Chips';
import Textfield from '../Mui-Atoms/Textfield';
import DataDialog from '../Mui-Atoms/DataDialog';
import NestedList from '../Mui-Atoms/NestedList';
import AlertDialog from '../Mui-Atoms/AlertDialog';
import FullWidthGrid from '../Mui-Atoms/FullWidthGrid';

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
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1); //the tab index to be selected

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    variant="fullWidth"
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab
                        label="TextField"
                        icon={<PhoneIcon />}
                        wrapped
                        {...a11yProps(0)}
                    />
                    <Tab label="Container" {...a11yProps(1)} />
                    <Tab label="Grids" {...a11yProps(2)} />
                    <Tab label="Disabled Tab" disabled {...a11yProps(3)} />
                    <Tab label="Tables" {...a11yProps(4)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <Textfield />
                <br />
                <Chips /> <br />
                <NestedList />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Container /> <br />
                <CustomExpPanel /> <br />
                <FolderList />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <FullWidthGrid /> <br />
                <AlertDialog /> <br />
                <DataDialog />
            </TabPanel>

            <TabPanel value={value} index={3}>
                This Table is disabled.
            </TabPanel>

            <TabPanel value={value} index={4}>
                <TableOptions />
            </TabPanel>
        </div>
    );
}
