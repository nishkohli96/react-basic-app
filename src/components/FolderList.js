import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        backgroundColor: 'skyblue',
        color: 'purple',
    },
}));

export default function FolderList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem className={classes.listItem}>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider />

            <Tooltip title="Work baby" placement="right-start" arrow>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon style={{ color: 'lightgreen' }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
            </Tooltip>

            <Divider light />
            <ListItem>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
                <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                </ListItemAvatar>
            </ListItem>
        </List>
    );
}
