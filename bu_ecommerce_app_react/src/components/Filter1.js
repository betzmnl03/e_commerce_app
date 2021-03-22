import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Grid,Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Divider} from "semantic-ui-react"


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));


export default function Filter1(props) {

    const classes = useStyles();
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



        function handleReset(){
            setState(false);
            props.handleClear()
        }
  return (
    <Grid container direction="column" className="ml-2">

<Button onClick={handleReset}>Clear All x</Button>
        <Grid item style={{
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }}>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>BRAND</Typography>
                    
                    </AccordionSummary>
                    <AccordionDetails>
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
                    
                    </AccordionDetails>
                    
                </Accordion>
                
                </div>
            
        </Grid>
        <p></p>
        <Grid item style={{
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }}>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>COLOR</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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

                    </AccordionDetails>
                </Accordion>
                
                </div>
        </Grid>
        <p></p>
        <Grid item style={{
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }}>
        <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h3" className={classes.heading}>PRICE</Typography>
                    
                    </AccordionSummary>
                    <AccordionDetails>

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


                    </AccordionDetails>
                </Accordion>
                
                </div>
                    </Grid>

    </Grid>

    
    
  );
}
