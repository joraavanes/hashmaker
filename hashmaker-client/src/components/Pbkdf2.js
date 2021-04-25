import React, { useState } from 'react'
import { Grid, makeStyles, Paper, Typography, FormControl, TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core'

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
    const {mt, smPadding, mdPadding, selectMinWidth, colorWhite} = useStyles();

    const [algorithm, setAlgorithm] = useState('SHA1');

    const changeHandler = e => setAlgorithm(e.target.value);

    return (
        <Grid container spacing={3} justify="center" className={mt}>
            <Grid item xs={12} sm={10} xl={12}>
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
                        <Grid item xs={12} sm={6}>
                            <form autoComplete="off" noValidate>
                                <div>
                                    <TextField id="password" label="Plain Password" fullWidth/>
                                </div>
                                <div>
                                    <TextField id="iterations" label="Iterations" fullWidth/>
                                </div>
                                <div>
                                    <TextField id="keylen" label="Keylen" fullWidth/>
                                </div>
                                <div>
                                    <FormControl className={mt}>
                                        <InputLabel id="algorithm">Algorithm</InputLabel>
                                        <Select
                                            id="str"
                                            labelId="algorithm"
                                            label="algorithm"
                                            fullWidth
                                            className={selectMinWidth}
                                            value={algorithm}
                                            onChange={changeHandler}
                                        >
                                            <MenuItem value="SHA1">SHA1</MenuItem>
                                            <MenuItem value="SHA256">SHA256</MenuItem>
                                            <MenuItem value="SHA384">SHA384</MenuItem>
                                            <MenuItem value="SHA512">SHA512</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <Button color="primary" variant="contained" className={`${mt} ${colorWhite}`}>Generate PBKDF2</Button>
                                </div>
                            </form>
                        </Grid>
                        <Grid item xs={12} sm={6}>Output</Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Pbkdf2
