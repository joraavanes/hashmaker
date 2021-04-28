import React, { useState } from 'react'
import { Grid, Typography, Paper, TextField, makeStyles, MenuItem, Select, Button } from '@material-ui/core'

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

const Decrypt = () => {
    const {mt1, mt2, smPadding, colorWhite} = useStyles();

    const [algorithm, setAlgorithm] = useState('aes-128-ccm');

    const changeHandler = e => setAlgorithm(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <Grid container justify="center" className={mt1}>
                <Grid item xs={12} sm={10}>
                    <Paper variant="elevation" className={smPadding}>
                        <Typography
                            className={smPadding}
                            align="center"
                            component="h2"
                            variant="h6">
                            Decrypt
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <form noValidate onSubmit={handleSubmit}>
                                    <TextField
                                        id="encryptedData"
                                        variant="standard"
                                        label="Encrypted Data"
                                        fullWidth
                                        multiline
                                        rows={5}
                                    />
                                    <TextField
                                        id="key"
                                        variant="standard"
                                        label="Key"
                                        fullWidth
                                    />
                                    <TextField
                                        id="iv"
                                        variant="standard"
                                        label="iv"
                                        fullWidth
                                    />
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
                                    <Button type="submit" color="primary" variant="contained" className={`${mt2} ${colorWhite}`}>Encrypt the Data</Button>
                                </form>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="decryptedData"
                                    label="Decrypted Data"
                                    variant="outlined"
                                    value="Decrypted Data"
                                    rows={6}
                                    multiline
                                    disabled
                                    fullWidth
                                />
                                <TextField
                                    className={mt1}
                                    id="key"
                                    label="Key"
                                    variant="outlined"
                                    value="Key"
                                    rows={4}
                                    multiline
                                    disabled
                                    fullWidth
                                />
                                <TextField
                                    className={mt1}
                                    id="iv"
                                    label="iv"
                                    variant="outlined"
                                    value="iv"
                                    rows={3}
                                    multiline
                                    disabled
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Decrypt
