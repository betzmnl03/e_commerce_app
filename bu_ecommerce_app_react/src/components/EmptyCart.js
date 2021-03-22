import React from 'react'
import { Segment, Image , Button} from 'semantic-ui-react'

import Grid from "@material-ui/core/Grid"
export default function EmptyCart() {
    return (
        <div>
       
             <Image src="./logo2.png" size='small' style={{
                 marginTop:"12%",
                 marginBottom: "5%"
             }}centered />

            <h2>Hey, it feels so light!</h2>
            <h6>There is nothing in your bag. Lets add some items.</h6>
            <Button inverted style={{
                background:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
                marginTop:"2%"
            }}>Add Items From Wishlist </Button>
             </div>
      
    )
}
