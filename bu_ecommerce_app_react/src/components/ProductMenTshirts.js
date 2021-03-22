import {Component} from "react"
import Grid from "@material-ui/core/Grid"
import { Dropdown, Icon} from 'semantic-ui-react'
import {Product} from "../requests.js"
import ProductCards from "./ProductCards"
import {Typography} from "@material-ui/core"
import Filter1 from "./Filter1"
import Box from '@material-ui/core/Box';
import { ContactsOutlined} from "@material-ui/icons"
// improt Icon from


export default class ProductIndexPage extends Component{
    constructor(props){
        super(props)
        this.state =  {
            products: [],
            original:[],
            initialWishilist:false
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSort = this.handleSort.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    
    

    componentDidMount(){
        let cat_id = this.props.match.params.category_id
        let sub_id = this.props.match.params.subcategory_id
        Product.index(cat_id, sub_id)
        .then((products)=>{

            this.setState((state)=>{
                return{
                    products: products,
                    original: products
                }
            })
        })
    }

    handleFilter(filter,checked){


        console.log(filter)
        if(filter[1]==="hm"){
            filter[1]="H&M"
        }
        else if(filter[1]==="peter"){
            filter[1]="Peter England"
        }
        else if(filter[1]==="john"){
            filter[1]="John Players"
        }
        if(checked){
        this.setState((state)=>{
            return{
                products: state.products.filter(p=>p[`${filter[0]}`]===filter[1])
            }
        })
        }
        else{
            this.setState((state)=>{
                return{
                    products: this.state.original
                }
            })
        }
    }

    handleClear(event){
        this.setState((state)=>{
            return{
                products: this.state.original
            }
        })
    }

    handleSort(event){
        console.log(event.target.textContent.split(" "))
        let sort=event.target.textContent.split(" ")
       
        if(sort[1]==="Low"){
            this.setState((state)=>{
                return{
                    products: this.state.products.sort((a,b) => a.price - b.price)
                }
            })
            
        }
        else{
            this.setState((state)=>{
                return{
                    products: this.state.products.sort((a,b) => b.price - a.price)
                }
            })
            
        }

    }

    render(){
      
        // this.state.products.length
            return (
                <Grid container direction="column">
                     <Grid item>
                         <Grid container direction="row">
                             <Grid item>
                                <Typography variant="h4" className="ml-4 mt-2">{this.props.type?this.props.type:""} - {this.state.products.length} items</Typography>
                                
                             </Grid>
                         </Grid>
                     </Grid>
                     <Grid item>
                        <Grid container>
                            <Grid item >
                            <Typography variant="h5" className="mt-4 ml-4">
                                Filters
                                <Icon name="filter" size="small"/>
                            </Typography>
                            </Grid>
                            <Grid item className="mr-4" style={{
                                marginLeft:"80%"
                                
                            }}>
                            <Dropdown
                            text='SORT'
                            icon='list'
                            floating
                            labeled
                            button
                            className='icon'
                        >
                            <Dropdown.Menu>
                            <Dropdown.Header  content='Sort by ' />
                            <Dropdown.Divider />
                            <Dropdown.Item icon='sort amount down' title="low" text='Price Low to High' name="low" id="low" onClick={this.handleSort}/>
                            <Dropdown.Item icon='sort amount up' text='Price High to Low' name="high" id="high" onClick={this.handleSort} />
                           
                            </Dropdown.Menu>
                        </Dropdown>
                            </Grid>
                        </Grid>
                     </Grid>
                     <Grid item>
                         <Grid container>
                            <Grid item sm={2}>     
                                
                                    <Filter1 handleFilter={this.handleFilter} handleClear={this.handleClear}/>
                                
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