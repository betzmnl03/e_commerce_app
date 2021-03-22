import React from "react"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { Menu, Segment,Dropdown } from 'semantic-ui-react'
import Link from '@material-ui/core/Link';

const MenuItems = ()=>{


    return(

        

       
        <Menu size="huge" borderless secondary >
                <Dropdown item text='MEN' borderless="true" className="pl-4 pr-4" style={{
            fontWeight:"900"
        }}>
                <Dropdown.Menu borderless>
                    <Dropdown.Item><Link href="/categories/1/subcategories/1/men-shirts" underline="none" color="inherit">Shirts</Link></Dropdown.Item>
                    <Dropdown.Item><Link href="/categories/1/subcategories/2/men-tshirts" underline="none" color="inherit">T-Shirts</Link></Dropdown.Item>
                    <Dropdown.Item><Link href="/categories/1/subcategories/3/men-jeans" underline="none" color="inherit">Jeans</Link></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text='WOMEN' borderless="true" className="pl-4 pr-4" style={{
            fontWeight:"900"
        }}>
                <Dropdown.Menu borderless>
                    <Dropdown.Item><Link href="/categories/2/subcategories/1/women-shirts" underline="none" color="inherit">Shirts</Link></Dropdown.Item>
                    <Dropdown.Item><Link href="/categories/2/subcategories/2/women-tshirts" underline="none" color="inherit">T-Shirts</Link></Dropdown.Item>
                    <Dropdown.Item><Link href="/categories/2/subcategories/3/women-jeans" underline="none" color="inherit">Jeans</Link></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text='KIDS' borderless="true"  className="pl-4 pr-4" style={{
            fontWeight:"900"
        }}>
                <Dropdown.Menu borderless>
                <Dropdown.Item><Link href="/categories/3/subcategories/1/kids-shirts" underline="none" color="inherit">Shirts</Link></Dropdown.Item>
                    <Dropdown.Item><Link href="/categories/3/subcategories/2/kids-tshirts" underline="none" color="inherit">T-Shirts</Link></Dropdown.Item>
                    <Dropdown.Item><Link href="/categories/3/subcategories/3/kids-jeans" underline="none" color="inherit">Jeans</Link></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
        </Menu>
      



    )
}


export default MenuItems