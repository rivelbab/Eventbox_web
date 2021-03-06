import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import LocalPhone from '@material-ui/icons/LocalPhone';
import DateRange from '@material-ui/icons/DateRange';
import LocationOn from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import PaperBlock from '../Paper/PaperBlock';
import styles from './widget-jss';

function ProfileWidget(props) {
  const { classes } = props;
  return (
    <PaperBlock title="About Me" whiteBg noMargin desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.">
      <Divider className={classes.divider} />
      <List dense className={classes.profileList}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DateRange />
            </Avatar>
            <ListItemText primary="Born" secondary="Jan 9, 1994" />
          </ListItemAvatar>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocalPhone />
            </Avatar>
            <ListItemText primary="Phone" secondary="(+62)8765432190" />
          </ListItemAvatar>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOn />
            </Avatar>
            <ListItemText primary="Address" secondary="Chicendo Street no.105 Block A/5A - Barcelona, Spain" />
          </ListItemAvatar>
        </ListItem>
      </List>
    </PaperBlock>
  );
}

ProfileWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileWidget);
