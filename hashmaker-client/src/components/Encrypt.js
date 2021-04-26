import React, { useState } from 'react'
import { Grid, Paper, Typography, TextField, makeStyles, Button, Select, MenuItem, FormControl,  } from '@material-ui/core'

const useStyles = makeStyles(styles => ({
    mt1:{
        marginTop: styles.spacing(3)
    },
    mt2:{
        marginTop: styles.spacing(4)
    },
    smPadding:{
        padding: styles.spacing(3)
    },
    colorWhite:{
        color: '#fff'
    }
}))

const Encrypt = () => {
    const {mt1, mt2, smPadding, colorWhite} = useStyles();

    const [data, setData] = useState('');
    const [keyPassword, setKeyPassword] = useState('');
    const [algorithm, setAlgorithm] = useState('aes-128-ccm');

    const changeHandler = e => setAlgorithm(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <Grid container justify="center" className={mt2}>
            <Grid item xs={12} sm={10}>
                <Paper variant="elevation" className={smPadding}>
                    <Typography component="h2" variant="h6" align="center"> 
                        Encryption
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <form 
                                noValidate 
                                autoComplete="off"
                                onSubmit={handleSubmit}>
                                <div>
                                    <TextField 
                                        label="Data" 
                                        id="data" 
                                        value={data}
                                        onChange={e => setData(e.target.value)}
                                        fullWidth/>
                                </div>
                                <div>
                                    <TextField 
                                        label="Key Password" 
                                        id="keyPassword" 
                                        value={keyPassword}
                                        onChange={e => setKeyPassword(e.target.value)}
                                        fullWidth/>
                                </div>
                                <div>
                                    <Select
                                        labelId="algorithm"
                                        label="algorithm"
                                        id="algorithm"
                                        value={algorithm}
                                        onChange={changeHandler}
                                        fullWidth
                                        className={mt1}
                                    >
                                        <MenuItem value="aes-128-ccm">aes-128-ccm</MenuItem>
                                        <MenuItem value="aes-128-gcm">aes-128-gcm</MenuItem>
                                        <MenuItem value="aes-192-ccm">aes-192-ccm</MenuItem>
                                        <MenuItem value="aes-192-gcm">aes-192-gcm</MenuItem>
                                        <MenuItem value="aes-256-ccm">aes-256-ccm</MenuItem>
                                        <MenuItem value="aes-256-gcm">aes-256-gcm</MenuItem>
                                    </Select>
                                </div>
                                <Button type="submit" color="primary" variant="contained" className={`${mt2} ${colorWhite}`}>Encrypt the Data</Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} sm={6}></Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Encrypt
