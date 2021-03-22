import React, { useState } from 'react';
import {
  SentimentVerySatisfied,
  SentimentVeryDissatisfied
} from '@material-ui/icons';
import {
  clientSecretPull,
  stripeDataObjectConverter,
  clientSecretDataObjectConverter
} 
from  "../constants/functions";
import {Order,Address, OrderedProducts, Cart} from '../requests'
import { useStateValue } from "../stateContext";
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Stepper,  CircularProgress, Box, Divider} from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import Grid from "@material-ui/core/Grid"
import CartProductList from "./CartProductList"
import PaymentForm from "./PaymentForm"
import AddressPage from "./AddressPage"
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { StateProvider } from "../stateContext";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, } from "@stripe/react-stripe-js";
import {grey} from "@material-ui/core/colors"
import axios from "axios"
import {
  useStripe,
  useElements,
  CardCvcElement,
} from '@stripe/react-stripe-js';
const stripe = loadStripe("pk_test_51ITGsIIutuA3p6E2lplWD8xcg1I0La99gzvOBaDJ1L5Rruhz8N7GUXXHc61BaumSBsmJsFv8Anf3LPF1QwIfjzmj00QA5wK7nB")
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;


  const icons = {
    1: <ShoppingCartIcon />,
    2: <HomeIcon />,
    3: <PaymentIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  price:{
    
      fontSize:"20px"
    
  },
  muted:{
    fontSize:"20px",
    color:"grey"
  }
}));

function getSteps() {
  return ['Cart', 'Address', 'Payment'];
}

function getStepContent(step,cart,user,remove) {
   
 
  switch (step) {
   
    case 0:
      return <CartProductList cart={cart} user={user} remove={remove}/>;
    case 1:
      return <AddressPage cart={cart} user={user} remove={remove} />;
    case 2:
      return  <PaymentForm/>;
    default:
      return "";
  }
}

export default function CartShowPage(props) {


  

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [loading, setLoading] = useState(false);
  const [cardStatus, setCardStatus] = useState(true);
  const [cardMessage, setCardMessage] = useState("");
  const [amount, setAmount] = useState(0);
  const [products, setProducts] = useState([]);
  const [{ formValues }, dispatch] = useStateValue();



  let sum=0;

  const handleNext = () => {
   
   
    if(sum>0){
      setAmount(sum)
    
    }
    if (activeStep === 2) {
      capture()
  } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
  }
    
  };

  const stripe = useStripe();
  const elements = useElements();
 
  /*********** Final Step ****************** */

  const capture = async () => {
  if (!stripe || !elements) {
    console.log("there was an error");
  }
  setLoading(true);

  const cardElement = elements.getElement(CardCvcElement);
  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,
    billing_details: {
      address:{
        city: formValues.city,
        line1: formValues.line1,
        line2: formValues.line2,
        postal_code: formValues.postal_code,
        province: formValues.province

      },
      name: `${formValues.firstname} ${formValues.lastname}`
    }
  });

  if(!error){
    const{id} = paymentMethod
    /****** Making a post request to the charges controlle ********** */
      const {data} = await axios.post("http://localhost:3000/api/v1/charges",{id,amount:amount*1000,address:formValues})
      if(data.id){
        setCardStatus(true);
        setCardMessage(`Payment successful \
        Thank you for placing the order. You will get a confirmation email soon`);
        dispatch({ type: 'emptyFormValue' });

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setLoading(false);
        Address.create(formValues)
    .then((address)=>{
      Order.create(address.id,formValues.firstname, formValues.lastname,formValues.phone, amount)
      .then((res)=>{
        let id = res.id
        OrderedProducts.create((res.id))
        .then((res)=>{
         props.removeAll()
         props.history.push(`/orders/${id}`)
        })
      })
    })

      }
      else{
        
          setCardStatus(false);
          setCardMessage(data)
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }

    
  
  }
  
}
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    
      <div className={classes.root} >
        
        <Stepper alternativeLabel activeStep={activeStep}  connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>

      </div>
      <Grid container justify="space-between">
          <Grid item sm={6}>
              {getStepContent(activeStep,props.cart, props.user, props.remove)}
                
          </Grid>

              
                {activeStep === 3 ?
                    <Grid
                        container
                        spacing={3}
                        direction="column"
                        justify="space-around"
                        alignItems="center"
                        style={{ height: "400px" }}
                    >
                        {cardStatus
                            ?
                            <SentimentVerySatisfied fontSize="large" color="primary" />
                            :
                            <>
                            <p>There was an error</p>
                            <SentimentVeryDissatisfied fontSize="large" color="error" />
                            </>
                        }
                        <Typography variant="h4">
                            {cardMessage}
                        </Typography>

                    </Grid>
                    :

                    <Grid item sm={5} style={{
                      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      marginRight:"2%",
                      height:"64vh"
                    }}>
                    <div>
                      <Grid container direction="column" justify="flex-start" className="border-left">
                        <Grid item className="m-4" >
                          <h2>COUPONS</h2>
                          <Grid container >
                            <Grid item style={{
                              marginLeft:"20%"
                            }}>
                            <LoyaltyIcon />
                              </Grid>
                              <Grid item>
                            <h3 className="ml-4" style={{
                              fontSize:"22px",
                            }}>Apply Coupons</h3></Grid>
                            <Grid item style={{
                                 marginLeft:"15%",
                                 marginTop:"1%"
                               }}>
                               <Button variant="contained" style={{
                                 background:"linear-gradient(to right, rgb(223, 239, 255) 0%, rgb(245, 221, 255) 100%)"
                               }} >APPLY</Button>
                               </Grid>

                          </Grid>
                          <Divider section className="mt-4" style={{
                          boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>
                        </Grid>
                        
                        <Grid item>
                        <h2>PRICE DETAILS</h2>
                          <Grid container className={classes.price} justify="space-around" >
                            <Grid item className="text-left" >
                              <h4 className={classes.price}>Total MRP</h4>
                              <h4 className={classes.muted}>Discount on MRP</h4>
                              <h4 className={classes.muted}>Coupon Discount</h4>
                            </Grid>
                            {props.cart?                  
                              <Grid item >
                                 {
                                props.cart.forEach((item)=>{
                                   sum = sum+(item.product.price*item.quantity)
                                   return sum
                                }
                                
                                )

                                  
                                  }<h4 className={classes.price}> ${sum? sum:""}</h4>
                                <h4 className={classes.muted} style={{
                                  marginRight:"70%"
                                }}>-$</h4>
                                <h4 className={classes.muted} style={{
                                  marginRight:"70%"
                                }}>-$</h4>
                              </Grid>
                            :
                            <Grid item>
                            <h6> &nbsp; $</h6>
                            <h6>-$</h6>
                            <h6>-$</h6>
                          </Grid>
                            }
                            
                          </Grid>
                          <Divider section className="m-4" style={{
                          boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>
                        </Grid>
                        
                        <Grid item >
                          <Grid container justify="space-around">
                            <Grid item>
                                <h1 >Total Amount: </h1></Grid>
                            <Grid item>
                            <h1 >${sum? sum:""}</h1></Grid>
                          </Grid>
                          <form autoComplete="off" className={classes.form} onSubmit={e => { e.preventDefault(); handleNext() }}>
                        <Grid container spacing={3} style={{
                          marginTop:"2%"
                        }}>
                            
                            <Grid container item justify="center">
                                <Button disabled={activeStep === 0} className={classes.button} variant="contained" size="large"
                                    fontSize="large" onClick={handleBack} size="large" style={{
                                  background: "linear-gradient(to right, rgb(223, 239, 255) 0%, rgb(245, 221, 255) 100%)",
                                  fontSize:"16px",
                                  color:"black",
                                  marginRight:"20%"
                                  
                                  
                                }}>
                                    Back
                                    </Button>
                                <Button
                                    variant="contained"
                                    color='primary'
                                    className={classes.button}
                                    type="submit"
                                    disabled={loading}
                                    size="large"
                                    fontSize="large"
                                    style={{
                                      background:'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                                      color:"#fafafa",
                                      fontSize:"15px"
                                    }}
                                >
                                    {
                                        loading
                                            ?
                                            <CircularProgress size={24} />
                                            :
                                            activeStep === 2 ? 'Place Order' : 'Next'
                                    }
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                
                        </Grid>
                        </Grid>
                        </div>
                        </Grid>
    
                }
  </Grid>

      </div>
  )

}
