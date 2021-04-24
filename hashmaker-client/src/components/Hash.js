import React from 'react'
import { Grid, Paper, Typography, makeStyles, TextField, Button} from '@material-ui/core'

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

const Hash = () => {
    const {mdPadding, mt, colorWhite} = useStyles();

    return (
        <Grid container spacing={3} justify="center" className={mt}>
            <Grid item xs={12} md={8} xl={12}>
                <Paper className={mdPadding}>
                    <Typography component="h2" variant="h5" className={mdPadding} align="center">
                        Hash
                    </Typography>
                    <form noValidate autoComplete="off">
                        <div>
                            <TextField id="str" label="Plain text" fullWidth/>
                        </div>
                        <div>
                            <TextField id="algorithm" label="algorithm" fullWidth/>
                        </div>
                        <div>
                            <Button color="primary" variant="contained" className={`${mt} ${colorWhite}`}>Generate Hash</Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Hash
