import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, makeStyles, Paper, Typography, FormControl, TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import { clearAll, pbkdf2 } from '../state/actions/cryptoActions';

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

const cryptoSelector = state => state.crypto;

const Pbkdf2 = () => {
    const {mt, smPadding, mdPadding, selectMinWidth, colorWhite} = useStyles();

    const dispatch = useDispatch();

    const [plainPassword, setPlainPassword] = useState('');
    const [iterations, setIterations] = useState(0);
    const [keylen, setKeylen] = useState(0);
    const [algorithm, setAlgorithm] = useState('SHA1');

    const crypto = useSelector(cryptoSelector);

    useEffect(() => {
        
        return () => {
            dispatch(clearAll());
        }
    }, []);

    const handleFormSubmit = e => {
        e.preventDefault();

        dispatch(pbkdf2(plainPassword, iterations, keylen, algorithm));
    };

    return (
        <Grid container spacing={3} justify="center" className={mt}>
            <Grid item xs={12} sm={10} xl={12}>
                <Paper className={mdPadding}>
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
                            <form autoComplete="off" onSubmit={handleFormSubmit} noValidate>
                                <div>
                                    <TextField id="password" label="Plain Password" fullWidth onChange={e=> setPlainPassword(e.target.value)} value={plainPassword}/>
                                </div>
                                <div>
                                    <TextField type="number" id="iterations" label="Iterations" fullWidth onChange={e => setIterations(Number(e.target.value))} value={iterations}/>
                                </div>
                                <div>
                                    <TextField type="number" id="keylen" label="Keylen" fullWidth onChange={e => setKeylen(Number(e.target.value))} value={keylen}/>
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
                                            onChange={e => setAlgorithm(e.target.value)}
                                        >
                                            <MenuItem value="SHA1">SHA1</MenuItem>
                                            <MenuItem value="SHA256">SHA256</MenuItem>
                                            <MenuItem value="SHA384">SHA384</MenuItem>
                                            <MenuItem value="SHA512">SHA512</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <Button type="submit" color="primary" variant="contained" className={`${mt} ${colorWhite}`}>Generate PBKDF2</Button>
                                </div>
                            </form>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                disabled
                                variant="outlined"
                                label="Salt"
                                defaultValue="Salt"
                                fullWidth
                                multiline
                                rows={4}
                                value={crypto.pbkdf2.salt}
                            />
                            <TextField 
                                className={mt}
                                disabled
                                label="Password Hash"
                                defaultValue="Password Hash" 
                                variant="outlined"
                                value={crypto.pbkdf2.pbkdf2Password}
                                multiline
                                fullWidth
                                rows={10}
                                />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Pbkdf2
