import {Component} from "react"
import Grid from "@material-ui/core/Grid"

import {Product, Search} from "../requests.js"
import ProductCards from "./ProductCards"
import {Typography} from "@material-ui/core"
import Filter from "./Filter"
import Box from '@material-ui/core/Box';


export default class ProductIndexPage extends Component{
    constructor(props){
        super(props)
        this.state =  {
            products: [],
            str:"",
            initialWishilist:false
        }
    }
    
    componentDidMount(){
        let str = this.props.location.search.slice(1,-1)
        // this.setState((str))
        // console.log("the string is",str)
        // console.log(this.props)
        Search.show(str)
        .then((res)=>{
           this.setState((state)=>{
               return{
                   products:res
               }
           })
          })

    }


    render(){
       
      
        console.log(this.state.products)
            return (
                <Grid container direction="column">
                     <Grid item>
                         <Grid container direction="row">
                             <Grid item>
                                <Typography variant="h6" className="m-4">Men T-Shirts - {this.state.products.length} items</Typography>
                                
                             </Grid>
                         </Grid>
                     </Grid>
                     <Grid item>
                        <Grid container justify="space-between">
                            <Grid item>
                            <Typography variant="h5" className="mt-4 ml-4">FILTERS</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" className="mt-4 mr-4">SORT</Typography>
                            </Grid>
                        </Grid>
                     </Grid>
                     <Grid item>
                         <Grid container>
                            <Grid item sm={2}>     
                                <Box border={1} >
                                    <Filter/>
                                </Box>
                            </Grid>
                            <Grid item sm={9} className="ml-4">
                                <Grid container spacing={4}>
                                    
                                    {this.state.products.map((p,i)=>{
                                       
                                            return (
                                                <Grid item sm={3} key={i}>

                                                    <ProductCards product={p} history={this.props.history} showCart={this.props.showCart} key={i} addWishlist={this.props.addWishlist} removeWishlist={this.props.removeWishlist}/>
                                                
                                                
                                                </Grid>
                                            )    
                                    })}
                                </Grid>
                            </Grid>
                         </Grid>

                     </Grid>

                 </Grid>
         )
        
    }
}