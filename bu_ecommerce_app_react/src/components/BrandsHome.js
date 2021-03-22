import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from "@material-ui/core/Grid"
import CardMedia from '@material-ui/core/CardMedia';
import BrandContent from "../Data/BrandContent"
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    marginTop: 30,
    height: 520,
  },
});

export default function BrandsHome(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={1}></Grid>
      <Grid item sm={10}>
          <Grid container spacing={2}>
            {
              BrandContent.map(brand=>{
                return(
                  <Grid item sm={3}>
                  <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia className={classes.media}
                      // style={{height: "150px"}}
                      image={brand.imageUrl}
                    />
                    </CardActionArea>
                  </Card>
                  </Grid>
                )
              })
            }

              
        </Grid>
      </Grid>
      <Grid item sm={1}></Grid>
      
    </Grid>
  );
}
