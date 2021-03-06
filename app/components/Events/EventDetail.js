import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import imgData from 'dan-api/images/imgData';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Type from 'dan-styles/Typography.scss';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import Ionicon from 'react-ionicons';
import People from '@material-ui/icons/People';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';
import styles from './jss/eventDetail-jss';

const getThumb = imgData.map(a => a.thumb);

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
	return <Slide direction="up" ref={ref} {...props} />;
});

class EventDetail extends React.Component { // eslint-disable-line

	render() {
		const {
			classes,
			open,
			close,
			detailContent,
			eventIndex
		} = this.props;

		const getImg = (img, bg) => {
			if (img !== '') { return img; }
			return bg;
		}
		const renderHTML = { __html: detailContent.getIn([eventIndex, 'content']) };
		return (
			<Dialog
				fullScreen
				open={open}
				onClose={close}
				TransitionComponent={Transition}
			>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" noWrap color="inherit" className={classes.flex}>
							{detailContent.getIn([eventIndex, 'title'])}
						</Typography>
						<IconButton color="inherit" onClick={() => close()} aria-label="Close">
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<div className={classes.detailContainer}>
					<Grid container className={classes.root} spacing={3}>
						<Grid item md={5} sm={12} xs={12}>
							<div className="container thumb-nav">
								<img src={getImg(detailContent.getIn([eventIndex, 'image']), detailContent.getIn([eventIndex, 'defaultBg']))} />
							</div>
						</Grid>
						<Grid item md={7} sm={12} xs={12}>
							<section className={classes.detailWrap}>
								<Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
									A propos :
								</Typography>
								<article dangerouslySetInnerHTML={renderHTML} />
								<Divider className={classes.divider} />
								<Typography noWrap gutterBottom variant="h6" className={classes.subtitle} component="h4">
									{detailContent.getIn([eventIndex, 'date'])} &nbsp; a &nbsp; {detailContent.getIn([eventIndex, 'time'])}
								</Typography>
								<Typography component="p" className={classes.author}>
									<b>Organisateur :</b> &nbsp; {detailContent.getIn([eventIndex, 'name'])} <br />
								</Typography>
								<Typography component="p" className={classes.participant}>
									<b>3</b> &nbsp; personnes y participent <br />
								</Typography>
								<Typography component="p" className={classes.location} color="primary">
									<ButtonBase focusRipple onClick={() => this.doSometing()} >
										36 rue du saint itoup, 75002 Paris &nbsp;
											<Ionicon icon="ios-pin-outline" className={classes.textIcon} />
									</ButtonBase>
								</Typography>
								<Divider className={classes.divider} />
								<div className={classes.btnArea}>
									<Button
										className={classes.btn}
										variant="contained"
										onClick={() => { false }}
										color="secondary"
									>
										Participer
                                    </Button>
									<Button
										className={classes.btn}
										variant="contained"
										onClick={() => { false }}
										color="primary"
									>
										Contacter l'autheur
                                    </Button>
									<Button
										className={classes.btn}
										variant="contained"
										onClick={() => { false }}
									>
										Supprimer
                                    </Button>
								</div>
							</section>
						</Grid>
					</Grid>
				</div>
			</Dialog>
		);
	}
}

EventDetail.propTypes = {
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	detailContent: PropTypes.object.isRequired,
	eventIndex: PropTypes.number,
};

EventDetail.defaultProps = {
	eventIndex: undefined
};

export default withStyles(styles)(EventDetail);
