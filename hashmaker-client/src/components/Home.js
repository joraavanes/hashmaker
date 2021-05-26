import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Button, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

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
    }
}));

const Home = () => {
    const {smPadding, mdPadding, mt, colorWhite} = useStyles();

    return (
        <Grid container spacing={3} justify="center" className={mt}>
            <Grid item xs={12} md={8} xl={12}>
                <Paper className={mdPadding}>
                    <Typography 
                        variant="h5"
                        component="h2"
                        align="center"
                        className={mdPadding}
                        gutterBottom>
                        Home
                    </Typography>
                    <Typography>
                        Cryptography is an important part of any back-end structure. whether you are authorizing an incoming request to store or read data or giving authentication to a user.
                        Nodejs at its core include a module called Crypto. There are plenty of hashing and cryptographical options ready to use. Althoough many may use 3rd party libraries such as bcrypt and aragon2, the Crypto module can make the most out of the job. 
                        In this project we are gonna showcase number of important and commonly used ones which could be useful in many cases and the input and output of procedure on a visual HTML form, would help learn the concept better.
                    </Typography>
                    <Button color="primary" variant="contained" className={`${mt} ${colorWhite}`} component={NavLink} to={"/hash"}>Go for Hashing</Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Home
