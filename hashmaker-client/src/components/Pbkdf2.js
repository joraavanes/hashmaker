import React from 'react'
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(styles => ({
    smPadding:{
        padding:'10px'
    },
    mdPadding:{
        padding:'20px'
    },
    mt: {
        marginTop: '20px'
    },
    colorWhite:{
        color: '#fff'
    },
    selectMinWidth:{
        minWidth: 120
    }
}));

const Pbkdf2 = () => {
    const {mt, smPadding, mdPadding} = useStyles();

    return (
        <Grid container spacing={3} justify="center" className={mt}>
            <Grid item xs={12} sm={10}>
                <Paper className={smPadding}>
                    <Typography
                        component="h2"
                        variant="h6"
                        align="center"
                        gutterBottom
                        className={mdPadding}
                    >
                        Password key derivation function 2 (PBKDF2)
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>Form</Grid>
                        <Grid item xs={12} sm={4}>Output</Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Pbkdf2
