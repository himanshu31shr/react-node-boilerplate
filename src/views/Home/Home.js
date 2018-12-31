import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Card, CardContent, Typography} from "@material-ui/core";

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
};

function Home(props) {
    const {classes} = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant={'h2'} align={'center'} gutterBottom>
                                Welcome to react boilerplate
                            </Typography>
                            <Typography variant="h5" align={'center'} color={'textSecondary'}>
                                Add your first component to get started.
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);