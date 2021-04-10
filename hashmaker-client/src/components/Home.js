import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import BorderClearIcon from '@material-ui/icons/BorderClear';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    alignCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography 
                variant="h6"
                component="h2"
                color="textSecondary"
                align="center"
                gutterBottom>
                Home
            </Typography>

            <ButtonGroup className={classes.alignCenter}>
                <Button type="button" color="secondary" variant="outlined">Home</Button>
                <Button 
                    type="button" 
                    color="secondary" 
                    variant="outlined"
                    startIcon={<BorderClearIcon fontSize="small" color="secondary"/>}
                    >
                    Hash
                </Button>
                <Button 
                    type="button" 
                    color="secondary" 
                    variant="outlined"
                    startIcon={<TrackChangesIcon fontSize="small" color="secondary"/>}>
                    PBKDF2
                </Button>
                <Button 
                    type="button" 
                    color="secondary" 
                    variant="outlined"
                    startIcon={<LockIcon fontSize="small" color="secondary"/>}>
                        Encrypt
                </Button>
                <Button 
                    type="button" 
                    color="secondary" 
                    variant="outlined"
                    startIcon={<LockOpenIcon fontSize="small" color="secondary"/>}>
                        Decrypt
                </Button>

            </ButtonGroup>
            <div>
            </div>
        </div>
    )
}

export default Home
