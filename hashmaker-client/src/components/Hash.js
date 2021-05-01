import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Paper, Typography, makeStyles, TextField, Button, Select, MenuItem, FormControl, InputLabel, jssPreset} from '@material-ui/core'

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

const Hash = () => {
    const {mdPadding, mt, colorWhite, selectMinWidth} = useStyles();

    const {loading} = useSelector(cryptoSelector);
    const [text, setText] = useState('');
    const [algorithm, setAlgorithm] = useState('SHA1');

    const textChangehanlder = e => setText(e.target.value);
    const algorithmChangeHanlder = e => setAlgorithm(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();

        console.log(e.target.str.value);
        console.log(algorithm);
    };

    return (
        <Grid container spacing={3} justify="center" className={mt}>
            <Grid item xs={12} md={10} xl={12}>
                <Paper className={mdPadding}>
                    <Typography component="h2" variant="h5" className={mdPadding} align="center">
                        Hash
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                        <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                            <div>
                                <TextField 
                                    id="str" 
                                    label="Plain text" 
                                    fullWidth
                                    value={text}
                                    onChange={textChangehanlder}
                                />
                            </div>
                            <FormControl className={mt}>
                                <InputLabel htmlFor="algorithm">Algorithm</InputLabel>
                                <Select
                                    id="algorithm"
                                    labelId="algorithm"
                                    label="algorithm"
                                    fullWidth
                                    className={selectMinWidth}
                                    value={algorithm}
                                    onChange={algorithmChangeHanlder}
                                >
                                    <MenuItem value="SHA1">SHA1</MenuItem>
                                    <MenuItem value="SHA256">SHA256</MenuItem>
                                    <MenuItem value="SHA384">SHA384</MenuItem>
                                    <MenuItem value="SHA512">SHA512</MenuItem>
                                </Select>
                                {/* <TextField id="algorithm" label="algorithm" fullWidth/> */}
                            </FormControl>
                            <div>
                                <Button type="submit" color="primary" variant="contained" className={`${mt} ${colorWhite}`}>Generate Hash</Button>
                            </div>
                        </form>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Output"
                            defaultValue="Hashed output"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={10}
                        />
                        </Grid>
                    </Grid>
                    
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Hash
