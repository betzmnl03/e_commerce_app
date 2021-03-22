import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"
import CarouselHome from './CarouselHome'
import BrandsHome from './BrandsHome'
import { Typography } from '@material-ui/core'


class HomePage extends Component {
    render() {
        return (
               <Grid container direction="column">
                    <Grid item>
                       <CarouselHome/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" className="ml-4 text-left" style={{
                            marginTop:"4%"
                        }}>BIGGEST DEALS ON TOP BRANDS</Typography>
                        <BrandsHome/>
                    </Grid>
                    <Grid item>Top Brands</Grid>
                    <Grid>Footer</Grid>
                </Grid>
        )
    }
}

export default HomePage
