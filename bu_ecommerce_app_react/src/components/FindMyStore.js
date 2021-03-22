import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import {useState} from "react"
import { Search, Grid, Header, Segment ,Form,Dropdown} from 'semantic-ui-react'
import storeData from "../Data/storeData.json"
import FindStorePage from './FindStorePage'
import ContactPage from './ContactPage'
const source = storeData.features


const Options = [
    {
      key: 'Ottawa',
      text: 'Ottawa',
      value: 'Ottawa',
     
    },
    {
        key: 'Vancouver',
        text: 'Vancouver',
        value: 'Vancouver',
       
      }]


function FindMyStore() {
 
  
    const [center, setCenter] = useState({ lat: 49.258502, lng: -123.092267 })
    const [results, setResults] = useState({})
    function handleSubmit(event){
        
        
    }

    function handleChange(event){
      let final = event.target.textContent
      if(final==="Ottawa"){
        setCenter({ lat: 45.4211, lng: -75.6903 })

    }
    else if(final==="Vancouver"){
        setCenter({ lat: 49.258502, lng: -123.092267 })
    }
    }

  return (
    <Grid >

      <Grid.Column width={4} style={{
          marginTop:"2%",
          marginLeft:"35%"
      }}>
           <Header as='h1' size="huge" icon="point">FIND MY STORE </Header>
          <Form onSubmit={handleSubmit}>
        {/* <Search
          onSearchChange={handleSearchChange}
          name="search"
          showNoResults={false} 
        /> */}

        <Dropdown
            placeholder='Select Location'
            fluid
            selection
            options={Options}
            onChange={handleChange}
        />
        </Form>
      </Grid.Column>
      <Grid.Row>
          <FindStorePage center={center}/>
      </Grid.Row>

      <Grid.Row>
          <ContactPage/>
      </Grid.Row>
     
    </Grid>
  )
}

export default FindMyStore
