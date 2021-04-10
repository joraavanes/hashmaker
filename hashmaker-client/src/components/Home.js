import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const Home = () => {
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

            <ButtonGroup>
                <Button type="button" color="secondary" variant="outlined">Home</Button>
                <Button type="button" color="secondary" variant="outlined">Hash</Button>
                <Button type="button" color="secondary" variant="outlined">PBKDF2</Button>
                <Button type="button" color="secondary" variant="outlined">Encrypt</Button>
                <Button type="button" color="secondary" variant="outlined">Decrypt</Button>

            </ButtonGroup>
        </div>
    )
}

export default Home
