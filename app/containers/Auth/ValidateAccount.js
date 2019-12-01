import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Build from '@material-ui/icons/Build';
import Hidden from '@material-ui/core/Hidden';
import Settings from '@material-ui/icons/SettingsApplications';
import Warning from '@material-ui/icons/Warning';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import classNames from 'classnames';

const styles = theme => ({
	container: {
		textAlign: 'center'
	},
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	},
	title: {
		color: '#FFF'
	},
	subtitle: {
		color: '#FFF'
	},
	paper: {
		margin: 'auto',
		padding: 40,
		width: '90%',
		[theme.breakpoints.up('sm')]: {
			width: 600,
			height: 300,
		},
		textAlign: 'center'
	},
	artwork: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: 30
	},
	icon: {
		margin: '10px 20px',
		background: 'rgba(255,255,255,0.6)',
		color: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
		width: 100,
		height: 100,
		boxShadow: theme.shadows[4],
		'& svg': {
			fontSize: 64,
		},
	},
	rightIcon: {
		marginLeft: theme.spacing(1),
	},
	divider: {
		margin: '10%',
		background: 'lightgrey',
	}
});

class ValidateAccount extends React.Component {
	render() {
		const title = brand.name + ' - ValidateAccount';
		const description = brand.desc;
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Helmet>
					<title>{title}</title>
					<meta name="description" content={description} />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					<meta property="twitter:title" content={title} />
					<meta property="twitter:description" content={description} />
				</Helmet>
				<div className={classes.container}>
					<div className={classes.artwork}>
						<Avatar className={classes.icon}><Build /></Avatar>
						<Hidden xsDown>
							<Avatar className={classes.icon}><Warning /></Avatar>
						</Hidden>
						<Hidden xsDown>
							<Avatar className={classes.icon}><Settings /></Avatar>
						</Hidden>
					</div>
					<Typography variant="h4" className={classes.title} gutterBottom> EMAIL NOT CONFIRM YET </Typography>
					<Typography variant="subtitle1" className={classes.subtitle}>
						Your account is not active, please click to the confirm link you receive in your student email
          			</Typography>
					<Divider className={classes.divider} />
					<Button variant="contained" color="secondary" href="/login">
						Se connecter <ArrowForward className={classes.rightIcon} />
					</Button>
				</div>
			</div>
		);
	}
}

ValidateAccount.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ValidateAccount);