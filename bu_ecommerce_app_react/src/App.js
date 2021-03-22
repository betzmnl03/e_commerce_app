import './App.css';
import ProductShowPage from "./components/ProductShowPage"
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom"
import {Component} from "react"
import HomePage from "./components/HomePage"
import ProductMenTshirts from "./components/ProductMenTshirts"
import {Cart, Session, Address, Wishlist, Search} from "./requests"
import SignInPage from "./components/SignInPage"
import SignUpPage from "./components/SignUpPage"
import Navbar from "./components/Navbar"
import CartPage from "./components/CartPage"
import ShowOrderPage from './components/ShowOrderPage';
import ViewOrdersPage from './components/ViewOrdersPage';
import WishlistShowPage from "./components/WishlistShowPage"
import ProductSearch from "./components/ProductSearch"
import ContactPage from "./components/ContactPage"
// import { Search } from '@material-ui/icons';


import FindStorePage from "./components/FindStorePage"
import FindMyStore from './components/FindMyStore';



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      clocksCount: [1],
      user:null,
      cart:null,
      wishlist:null,
      searched:null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.destroySession = this.destroySession.bind(this)
    this.removeCart = this. removeCart.bind(this)
    this.showCart = this.showCart.bind(this)
    this.removeAll = this.removeAll.bind(this)
    this.addWishlist = this.addWishlist.bind(this)
    this.removeWishlist = this.removeWishlist.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
   
  }

  componentDidMount() {

    Session.currentUser()
    .then(user=>{
      this.setState((state)=>{
        return {user:user}
      })
    })
    .then(()=>{
      Cart.getCart()
      .then((cart)=>{
        this.setState((state)=>{
          return {cart:cart}
        })
      })
    })
    .then(()=>{
      Wishlist.getWishlist()
      .then((wishlist)=>{
        this.setState((state)=>{
          return {
            wishlist:wishlist
          }
        })
      })
    })
  }
  handleSubmit(params){
    // params look like this : {email: 'js@winterfell.gov', password: 'supersecret'}
    Session.create(params).then(()=>{
      return Session.currentUser()}
      ).then(user=>{
        
        this.setState((state)=>{
       
          return {user:user}
        })
      })
      
  }

  handleSignUp(){
    Session.currentUser().then(user=>{
      this.setState((state)=>{
        return {user:user}
      })
    })
  
  }

  destroySession(){
    Session.destroy()
    .then(res=>{
      this.setState((
        state=>{
          return {user:null}
        }
      ))
    })
  }

     removeCart(product_id){
     
       Cart.delete(product_id,this.state.cart.id)
       .then(()=>{
           this.setState((state)=>{
             return {
               cart: state.cart.filter(c=>c.product.id !==product_id)
             }
           })
       })
    }

    removeAll(){
          this.setState((state)=>{
            return {
              cart: null
            }
          })
      
   }

    showCart(){
      Cart.getCart()
      .then((cart)=>{
        this.setState((state)=>{
          return {
            cart: cart
          }
        })
      })
    }


    addAddress(params){
      Address.create(params).then(()=>{
        return Session.currentUser()}
        ).then(user=>{
         
          this.setState((state)=>{
            return {user:user}
          })
        })
    }


    addWishlist(id){
    
      Wishlist.create(id)
      .then((wishlist)=>{
      
        this.setState((state)=>{
          return {
            wishlist:wishlist
          }
        })
      })
    }




    removeWishlist(id){
    
      Wishlist.delete(id,id)
      .then((res)=>{
        console.log(res)
        this.setState((state)=>{
          return {
            wishlist: state.wishlist.filter(w=>w.product.id !==id)
          }
        })
      })
    }

    handleSearch(params){
      // console.log("inside search handle")
      // console.log(params)

     
    }
  render(){
    // console.log(this.state.searched)
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar currentUser={this.state.user} handleSearch={this.handleSearch} destroySession={this.destroySession} cart={this.state.cart} wishlist={this.state.wishlist} />
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path='/cart' render={(routeProps)=><CartPage user={this.state.user} cart={this.state.cart} remove={this.removeCart} removeAll={this.removeAll} {...routeProps}/>} />
            <Route path="/search" render={(routeProps)=><ProductSearch products={this.state.searched} handleSearch={this.handleSearch} {...routeProps} createCart={this.state.createCart} addWishlist={this.addWishlist} removeWishlist={this.removeWishlist} wishlist={this.state.wishlist}/>} />  
            <Route path="/categories/:category_id/subcategories/:subcategory_id/men-tshirts" render={(routeProps)=><ProductMenTshirts handleSubmit={this.handleSubmit} {...routeProps} createCart={this.state.createCart} addWishlist={this.addWishlist} removeWishlist={this.removeWishlist} type="Men Tshirts" wishlist={this.state.wishlist}/>} />
            <Route path="/categories/:category_id/subcategories/:subcategory_id/men-shirts" render={(routeProps)=><ProductMenTshirts handleSubmit={this.handleSubmit} {...routeProps} createCart={this.state.createCart} addWishlist={this.addWishlist} removeWishlist={this.removeWishlist}  type="Men Shirts" wishlist={this.state.wishlist}/>}  />   
            <Route path="/categories/:category_id/subcategories/:subcategory_id/men-jeans" render={(routeProps)=><ProductMenTshirts handleSubmit={this.handleSubmit} {...routeProps} createCart={this.state.createCart} addWishlist={this.addWishlist} removeWishlist={this.removeWishlist}  type="Men Jeans" wishlist={this.state.wishlist}/>} /> 
            <Route path="/categories/:category_id/subcategories/:subcategory_id/women-tshirts" render={(routeProps)=><ProductMenTshirts handleSubmit={this.handleSubmit} {...routeProps} createCart={this.state.createCart} addWishlist={this.addWishlist} removeWishlist={this.removeWishlist} type="Women Tshirts" wishlist={this.state.wishlist}/>} />
            <Route path="/categories/:category_id/subcategories/:subcategory_id/women-shirts" render={(routeProps)=><ProductMenTshirts handleSubmit={this.handleSubmit} {...routeProps} createCart={this.state.createCart} addWishlist={this.addWishlist} removeWishlist={this.removeWishlist}  type="Women Shirts" wishlist={this.state.wishlist}/>}  />   
            <Route path="/categories/:category_id/subcategories/:subcategory_id/women-jeans" render={(routeProps)=><ProductMenTshirts handleSubmit={this.handleSubmit} {...routeProps} createCart={this.state.createCart} addWishlist={this.addWishlist} removeWishlist={this.removeWishlist}  type="Women Jeans" wishlist={this.state.wishlist}/>} />     
         
            <Route path="/products/:id" render={(routeProps)=><ProductShowPage handleSubmit={this.handleSubmit} {...routeProps} showCart={this.showCart} wishlist={this.state.wishlist} addWishlist={this.addWishlist} removeWishlist={this.removeWishlist}/>} />                      
            {/* <Route path= component={}/> */}
            <Route path='/wishlists' render={(routeProps)=><WishlistShowPage removeWishlist={this.removeWishlist} createCart={this.state.createCart} {...routeProps}/> } />    
            <Route path='/orders/:id' render={(routeProps)=><ShowOrderPage {...routeProps}/>} />
            <Route path='/orders' render={(routeProps)=><ViewOrdersPage {...routeProps}/>} />    
            <Route path='/sign_in' render={(routeProps)=><SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>} />
            <Route path='/sign_up' render={(routeProps)=><SignUpPage handleSignUp={this.handleSignUp} {...routeProps}/>}/> 
            <Route path="/contact_us" exact component={FindMyStore}/>
            <Route path="/find_store" exact component={FindStorePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  }



export default App;
