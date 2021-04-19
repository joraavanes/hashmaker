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
                        Cryptography is and important part of any back-end structure. whether you are authorizing an incoming request to store or read data or giving authentication to a user.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam quos reprehenderit temporibus quam nemo eligendi quasi praesentium mollitia, eaque, sunt cum modi provident accusantium doloribus fugit? Unde magnam obcaecati quia atque fuga natus iste sapiente, reprehenderit iure maxime excepturi eos ea quam earum dolorum eaque et, cupiditate nesciunt vitae sint. Libero voluptas vero vel quidem molestias excepturi. Quod optio voluptate quisquam dicta cumque, excepturi repellendus molestias rerum repudiandae! Nihil perferendis velit, iste, porro eligendi nemo facilis facere quod totam similique quos! Quidem amet voluptatibus reiciendis blanditiis culpa aliquid explicabo ullam aspernatur. Praesentium, tenetur laboriosam mollitia ad officiis quae voluptatem.
                    </Typography>
                    <Button color="primary" variant="contained" className={`${mt} ${colorWhite}`} component={NavLink} to={"/hash"}>Go for Hashing</Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Home
