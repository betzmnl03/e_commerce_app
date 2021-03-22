const BASE_URL = 'http://localhost:3000/api/v1';

export const Product = {

    index(category_id, subcategory_id){
        return fetch(`${BASE_URL}/categories/${category_id}/subcategories/${subcategory_id}/products`,{
          credentials:"include"
        })
        .then(res=>{
           
            return res.json();
        })
    },
    create(params) {
        return fetch(`${BASE_URL}/products`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)
        }).then(res => res.json())
      },
      show(id) {
        return fetch(`${BASE_URL}/products/${id}`,{
          credentials:"include"
        })
          .then(res => 
            res.json())
      },
}

export const User={
  create(params){
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user:params})
      }
    ).then(res => res.json());
  }
}

export const Session = {
  create(params) {
    // params should look like { email: 'johnsnow@gmail.com', password: 'supersecret' }
    return fetch(`${BASE_URL}/session`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // allows cookies to be recieved and sent from this request
      method: 'POST',
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json();
    })
  },
  currentUser(){
    return fetch(`${BASE_URL}/current_user`,{
      credentials: 'include' // We need to include a session in a request so we can fetch that particular user
    })
    .then((res)=> res.json())
  },
  destroy(){
    return fetch(`${BASE_URL}/session`, {
      method: 'Delete',
      credentials: 'include'
    }).then(res => res.json())
  },
  
}

export const Cart={
  create(id,size,quantity){
    return fetch(`${BASE_URL}/products/${id}/carts`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({product:id, size:size, quantity:quantity})
      }
    ).then(res => res.json());
  },
  getCart(){
    return fetch(`${BASE_URL}/get_cart`,{
      credentials: 'include'
    })
    .then(res => res.json());
  },
  getCartDetails(){
    return fetch(`${BASE_URL}/get_cart_details`,{
      credentials: 'include'
    })
    .then(res => res.json());
  },
  delete(product_id,cart_id){
    return fetch(`${BASE_URL}/products/${product_id}/carts/${cart_id}`, {
      method: 'Delete',
      credentials: 'include'
    }).then(res => res.json())
  }
}


export const Wishlist={
  create(id){
    return fetch(`${BASE_URL}/products/${id}/wishlists`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({product:id})
      }
    ).then(res => res.json());
  },
  getWishlist(){
    return fetch(`${BASE_URL}/get_wishlist`,{
      credentials: 'include'
    })
    .then(res => res.json());
  },
  delete(product_id,wishlist_id){
    console.log("here")
    return fetch(`${BASE_URL}/products/${product_id}/wishlists/${wishlist_id}`, {
      method: 'Delete',
      credentials: 'include'
    }).then(res => res.json())
  },
  index(){
    return fetch(`${BASE_URL}/wishlists`,{
      credentials:"include"
    })
    .then(res=>{
        return res.json();
    })
},
}


export const Order = {
  create(address,firstname,lastname,phone,amount) {
    // params should look like { email: 'johnsnow@gmail.com', password: 'supersecret' }
    return fetch(`${BASE_URL}/orders`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // allows cookies to be recieved and sent from this request
      method: 'POST',
      body: JSON.stringify({address:address,firstname:firstname,lastname:lastname,phone:phone,amount:amount})
    }).then((res) => {
      return res.json();
    })
  },
  index(){
    return fetch(`${BASE_URL}/orders`,{
      credentials: 'include'
    })
    .then((res)=>{
     
        return res.json();
    })
},
show(id) {

  return fetch(`${BASE_URL}/orders/${id}`,{
    credentials: "include"
  })
    .then(res => 
      res.json())
}

}

export const OrderedProducts = {
  create(order) {
    // params should look like { email: 'johnsnow@gmail.com', password: 'supersecret' }
    return fetch(`${BASE_URL}/ordered_products`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // allows cookies to be recieved and sent from this request
      method: 'POST',
      body: JSON.stringify({order:order})
    }).then((res) => {
      return res.json();
    })
  }
}

export const Address = {
  create(params) {
    // params should look like { email: 'johnsnow@gmail.com', password: 'supersecret' }
    return fetch(`${BASE_URL}/address`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // allows cookies to be recieved and sent from this request
      method: 'POST',
      body: JSON.stringify({address:params})
    }).then((res) => {
      return res.json();
    })
  }
}

export const Search = {



    show(params) {

      return fetch(`${BASE_URL}/search`,{
        headers: {
          'Content-Type': 'application/json'
        },
        credentials:"include",
        method: "POST",
        body: JSON.stringify({params}) 
      })
        .then(res => 
          res.json())
    }
}

export const Similar = {



  show(id) {

    return fetch(`${BASE_URL}/similar/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      },
      credentials:"include"
      
      
    })
      .then(res => 
        res.json())
  }
}


export const Review = {
  create(params,id) {
    // params should look like { email: 'johnsnow@gmail.com', password: 'supersecret' }
    return fetch(`${BASE_URL}/products/${id}/reviews`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // allows cookies to be recieved and sent from this request
      method: 'POST',
      body: JSON.stringify({review:params})
    }).then((res) => {
      return res.json();
    })
  }
}
