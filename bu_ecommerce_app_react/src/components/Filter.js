import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Grid} from "@material-ui/core"


export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    brand_peter: false,
    brand_hm: false,
    brand_john: false,
    color_black: false,
    color_white: false,
    color_blue: false,
    price_price1: false,
    price_price2: false,
    price_price3: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    // console.log(event.target.name, event.target.checked)
    // console.log(event.target.name.split("_"))
    props.handleFilter(event.target.name.split("_"),event.target.checked)
  };


  return (
    <Grid container direction="column">
        <Grid item>
            <p>BRAND</p>
            <FormGroup column className="ml-3">
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.brand_peter}
                        onChange={handleChange}
                        name={`brand_peter`}
                        color="primary"
                    />
                    }
                    label={"Peter England"}
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.brand_hm}
                        onChange={handleChange}
                        name="brand_hm"
                        color="primary"
                    />
                    }
                    label={"H&M"}
                />
                    <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.brand_john}
                        onChange={handleChange}
                        name="brand_john"
                        color="primary"
                    />
                    }
                    label="John Players"
                />
            </FormGroup>
        </Grid>
        <Grid item>
            <p>COLOR</p>
            <FormGroup column className="ml-3">
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.color_black}
                        onChange={handleChange}
                        name="color_black"
                        color="primary"
                    />
                    }
                    label="Black"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.color_white}
                        onChange={handleChange}
                        name="color_white"
                        color="primary"
                    />
                    }
                    label="White"
                />
                    <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.color_blue}
                        onChange={handleChange}
                        name="color_blue"
                        color="primary"
                    />
                    }
                    label="Blue"
                />
            </FormGroup>
        </Grid>
        <Grid item>
            <p>PRICE</p>
            <FormGroup column className="ml-3">
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.price_price1}
                        onChange={handleChange}
                        name="price_price1"
                        color="primary"
                    />
                    }
                    label="$20 - $30"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.price_price2}
                        onChange={handleChange}
                        name="price_price2"
                        color="primary"
                    />
                    }
                    label="$30 - $40"
                />
                    <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.price_price3}
                        onChange={handleChange}
                        name="price_price3"
                        color="primary"
                    />
                    }
                    label="$50 - $60"
                />
            </FormGroup>
        </Grid>

    </Grid>

    
    
  );
}
