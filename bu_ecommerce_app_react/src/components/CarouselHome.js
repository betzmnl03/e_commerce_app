import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
export class CarouselHome extends Component {
    render() {
        return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/15/1483f3a7-0da2-4c5d-8327-011ae9ce2e571613402396113-M-H_Desk_Banner.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/15/d72d7cf6-ca13-4c4e-a513-fdad266802f41613402396005-Sports-Shoes_Desk.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/15/76f07099-c193-4986-a20b-35df78fdfb531613402396082-Mango_Desk_Banner.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/15/0f7f5bba-e2f7-4250-9eab-de833b7642e11613402396021-cat-fest-kids-feb.gif"
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/15/4df356db-22fc-4363-a6ce-a26934e68cf21613402396069-Men-Casual_Desk.jpg"
                alt="Fifth slide"
                />
            </Carousel.Item>
        </Carousel>
        )
    }
}

export default CarouselHome
