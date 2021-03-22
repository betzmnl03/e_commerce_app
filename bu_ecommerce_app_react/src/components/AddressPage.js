import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStateValue } from "../stateContext";


export default function AddressPage(props) {


    const [{ formValues }, dispatch] = useStateValue();
    
 
    const {user} = props

  return (
    
    <React.Fragment>
      
      <Typography variant="h4" gutterBottom>
        Shipping Details
      </Typography>
      <form>
      <Grid container spacing={3} className="m-4">
     
        <Grid item xs={12} sm={6}>
           
          <TextField
            required
            id="firstname"
            name="firstname"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={formValues.firstname}
            variant="outlined"
            onChange={e =>
                dispatch({
                    type: "editFormValue",
                    key: "firstname",
                    value: e.target.value
                })
            }
            // value = {user? user.first_name:""}
          />
            
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            variant="outlined"
            value={formValues.lastname}
            onChange={e =>
                dispatch({
                    type: "editFormValue",
                    key: "lastname",
                    value: e.target.value
                })
            }
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
            required
            id="line1"
            name="line1"
            label="Address line 1"
            fullWidth
            variant="outlined"
            value={formValues.line1}
            onChange={e =>
                dispatch({
                    type: "editFormValue",
                    key: "line1",
                    value: e.target.value
                })
            }
            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="line2"
            name="line2"
            label="Address line 2"
            fullWidth
            value={formValues.line2}
            variant="outlined"
            onChange={e =>
                dispatch({
                    type: "editFormValue",
                    key: "line2",
                    value: e.target.value
                })
            }
          />
        </Grid>
        <Grid item xs={6}>
            <TextField
                required
                id="phone"
                name="phone"
                label="Phone"
                fullWidth
                variant="outlined"
                // autoComplete="given-name"
                value={formValues.phone}
                onChange={e =>
                    dispatch({
                        type: "editFormValue",
                        key: "phone",
                        value: e.target.value
                    })
                }
                // value = {user? user.first_name:""}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            value={formValues.city}
            variant="outlined"
            onChange={e =>
                dispatch({
                    type: "editFormValue",
                    key: "city",
                    value: e.target.value
                })
            }
          />
             
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth variant="outlined"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postal_code"
            name="postal_code"
            label="Zip / Postal code"
            fullWidth
            value={formValues.postal_code}
            variant="outlined"
            onChange={e =>
                dispatch({
                    type: "editFormValue",
                    key: "postal_code",
                    value: e.target.value
                })
            }
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
            
            
          />
        </Grid>
        
      </Grid>
     
      <Grid/>
      </form>
    </React.Fragment>
    
  );
}

