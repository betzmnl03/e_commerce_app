
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStateValue } from "../stateContext";
import StripeInput from "./StripeInput";


import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from "@stripe/react-stripe-js";


export default function PaymentForm() {


    const [{ formValues }, dispatch] = useStateValue();
    const cardsLogo = [
        "amex",
        "cirrus",
        "diners",
        "dankort",
        "discover",
        "jcb",
        "maestro",
        "mastercard",
        "visa",
        "visaelectron",
    ];
  return (
    <React.Fragment>
        <Grid container className="m-4">
            <Grid container direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h4" gutterBottom className="mb-2">
                    Payment method
                </Typography>
            </Grid>
            <Grid container item xs={12} sm={9} justify="center">
                {cardsLogo.map(e => <img key={e} src={`./cards/${e}.png`} alt={e} width="60px" height="55px "align="bottom" style={{ padding: "0 5px" }} />)}
            </Grid>
            </Grid>
        <Grid container spacing={3} style={{
          margin:"4%"
        }}>
            <Grid item xs={12} md={6}>
            <TextField 
            required 
            id="cardName" 
            name ="cardName"
            label="Name on card" 
            fullWidth  
            autoComplete="cc-name"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            />
            </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ccnumber"
            id="ccnumber"
            label="Card number"
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            // autoComplete="cc-number"
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                  component: CardNumberElement
              },
          }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required
           id="ccexp" 
           name="ccexp"
          label="Expiry date" 
          fullWidth
          variant="outlined"
          InputProps={{
            inputProps: {
                component: CardExpiryElement
            },
            inputComponent: StripeInput
            
        }}
        InputLabelProps={{ shrink: true }}
           />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvc"
            name="cvc"
            label="CVC"
            helperText="Last three digits on signature strip"
            InputLabelProps={{ shrink: true }}
            fullWidth
            variant="outlined"
            InputProps={{
              inputProps: {
                  component: CardCvcElement
              },
              inputComponent: StripeInput
          }}
          InputLabelProps={{ shrink: true }}
            
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      </Grid>
    </React.Fragment>
  );
}