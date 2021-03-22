import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, Icon} from 'semantic-ui-react'
import Grid from "@material-ui/core/Grid"
import { Header } from 'semantic-ui-react'
import {Divider,Segment} from 'semantic-ui-react'

const options = [
  { key: 'p', text: 'Product Information', value: 'product_information' },
  { key: 'o', text: 'Order Follow Up', value: 'order' },
  { key: 'ot', text: 'Other', value: 'other' },
]

class ContactPage extends Component {
 
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    order:"",
    type:""
  }

  handleSubmit(e) {
    
    e.preventDefault()  
    // console.log(this.state.type)

    const { name, email, message,order,type } = this.state    
    let templateParams = {
      from_name: name,
      to_name: 'Betsy',
      email:email,
      message: message,
      order: order,
      type:type
     }     
  
     emailjs.send(
        'service_c3i8cyh',
        'template_j6c6c7j',
       templateParams,
       "user_HHqJHk8rOz3fs8z04U5z8"
     )     
     this.resetForm()
 
    }
    resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
      order:"",
      type:""
    })
  

  
  }

  handleSelect = (e)=>{

    this.setState((state)=>{
      return{
        type: e.target.textContent
      }
    })  
  }
  handleChange = (param, e) => {
    
    this.setState({ [param]: e.target.value })

 
  }
  render() {
    return (
      <>

        <Grid container justify="center" direction="column" alignItems="center" sm={12}>
            <Grid item style={{
              marginTop:"1%",
             
            }}
            >
              {/* <Segment basic textAlign='center'> */}
                <Header as='h1' size="huge">GOT QUESTIONS OR CONCERNS? </Header>
                <Header as='h1'>WE GOT YOU</Header>
                <Header as='h4'>Our customer service team has an increased response time of about 3-5 days. </Header>
                <Header as='h4' className="pr-4 pl-4">{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}If you have questions, please email support@bm.com and a team member will reach out as soon as they can. {'\u00A0'}{'\u00A0'}{'\u00A0'}</Header>
               
                {/* </Segment> */}
                <Divider section></Divider>
            </Grid>
            
            <Grid item>
           

                <Header className="ml-4" as='h2' size="medium">Email Us: </Header>
                        <Form onSubmit={this.handleSubmit.bind(this)} className="ml-4" size="massive" style={
                          {
                            width:"40vw",
                           
                          }
                        }>

                        <Form.Field>
                       
                        <Form.Input required label="Name" placeholder='John Snow' name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
                        </Form.Field>

                        <Form.Field>
                        <Form.Select
                        fluid
                        
                        label='How can we help?'
                        options={options}
                        name="type"
                        value={this.state.type}
                        // value={this.state.type}
                        placeholder='Select Query Type'
                        onChange={this.handleSelect.bind(this)}
                      />
                        </Form.Field>
                        <Form.Field>
                       
                        <Form.Input required  label="Email" placeholder='js@winterfell.gov' name="email"  value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                        </Form.Field>
                        <Form.Field>
                       
                        <Form.Input required  placeholder='message' name="message"  value={this.state.message} onChange={this.handleChange.bind(this, 'message')}/>
                        </Form.Field>
                        <Form.Field>
                       
                       <Form.Input required  placeholder='Order #' name="order"  value={this.state.order} onChange={this.handleChange.bind(this, 'order')}/>
                       </Form.Field>

                       <Button type='submit'size="huge" animated="vertical" style={{
                         background:'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                         color:"#fafafa"
                       }}>
                            <Button.Content visible>Send</Button.Content>
                            <Button.Content hidden>
                              <Icon name='send' />
                            </Button.Content>
                      </Button>
                        
                    </Form>
                    
                    
                    
            </Grid>

        </Grid>
         
       
      </>
    )
  }
}

export default ContactPage