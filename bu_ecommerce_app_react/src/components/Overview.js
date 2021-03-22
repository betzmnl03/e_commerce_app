import React from 'react'
import Grid from "@material-ui/core/Grid"
import { borders} from '@material-ui/system';
import Box from "@material-ui/core/Box"
import Divider from '@material-ui/core/Divider';
const defaultProps = {
    bgcolor: 'background.paper',
    border: 1,
    m: 1,
    borderColor: 'text.primary',
    // style: { width: '5rem', height: '5rem' },
  };

  
export default function Overview() {
    return (
      <Box {...defaultProps} borderBottom={0} borderLeft={0} borderTop={0}>
        <Grid container direction="column" spacing={6}>
            <Grid item>
                
            </Grid>
            <Grid item>
                
                    <p>ORDERS</p>
                    <strong>Orders & Returns </strong>
                
                <Divider variant="middle" className="mt-4" />
            </Grid>
           
            <Grid item>
                 <p>CREDITS</p>
                 <div>
                     <p>COupons</p>
                     <p>BM Credit</p>
                     <p>BM Cash</p>
                 </div>
                 <Divider variant="middle" className="mt-4" />
            </Grid>
            <Grid item>
                 <p>ACCOUNT</p>
                 <div>
                     <p>Profile</p>
                     <p>Saved Cards</p>
                     <p>Addresses</p>
                 </div>
            </Grid>
        </Grid>
        </Box>

    )
}
