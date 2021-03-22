import React from "react"
import {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch"
import { Divider, Image, Modal,Button, Header,Icon} from 'semantic-ui-react'
import Zoom from 'react-img-zoom'
import ReactImageMagnify from 'react-image-magnify';


function exampleReducer(state, action) {
    console.log(action.id)
    switch (action.type) {
      case 'OPEN_MODAL':
        return { open: true, dimmer: action.dimmer, id: action.id}
      case 'CLOSE_MODAL':
        return { open: false }
      default:
        throw new Error()
    }
  }
  

export default function ProductImages(props) {
    // const classes = useStyles();

    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
        id: undefined
      })
      
      const { open, dimmer,id } = state
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    const {images} = props
    return (
        
        <div>
            <Image.Group size='large' className="group">
            <Grid container direction="row">
            {images && images.length>0? images.map((image,i)=>{
                return(
                    <Grid item className="geeks m-2" >
                        <Image src={image} key={i} className="geeks hello" 
                        style={{
                          boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                         onClick={() => dispatch({ type: 'OPEN_MODAL', id:i, dimmer:"blurring"}
                         )}
                         />
                       </Grid>
                )
            })
            :<div></div>}
                </Grid>
            </Image.Group>
            
            <Divider hidden />
            <Modal
              closeIcon={{ style: { top: '0.8rem', right: '1rem' }, color: 'black', name: 'close'}}
              dimmer={dimmer}
              open={open}
              onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
              id={id}
              size="large"
            >                        
              <React.Fragment >
                                            
              <Modal.Content 
              className="mt-2"image>
              </Modal.Content>
              <Modal.Content>
                  <Modal.Description>
                    {id!==undefined?
                      <ReactImageMagnify {...{
                          largeImage: {
                              src: images[id],
                              width: 1200,
                              height:1200
                          },
                          smallImage: {
                              alt: 'Product Image',
                              width: 500,
                              height: 600,
                              src: images[id]
                          },

                      }} 
                      />
                    :""}  
                      </Modal.Description>
                </Modal.Content>
                
               </React.Fragment>
                      
            </Modal>
    </div>
 )
}
