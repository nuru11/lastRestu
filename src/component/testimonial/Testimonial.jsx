import React from 'react'
import "./testimonial.css"
import testimoial1 from '../../asset/testimonial-img1.jpg'
import testimoial2 from '../../asset/testimonial-img2.jpg'
import testimoial3 from '../../asset/testimonial-img3.jpg'
import testimoial4 from '../../asset/testimonial-img4.jpg'

import { Pagination, Navigation } from 'swiper'

import {Swiper, SwiperSlide} from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image:testimoial1,
    namee: "john jone",

    review: "Lorem ipsum dolor sit, amet consectetur adipisicing  Eius sequi quam quisquam veritatis tempora cupiditate doloribuspossimus corrupti reprehenderit ratione?"
  }, 
  {
    image:testimoial2,
    namee: "peter show",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing  Eius sequi quam quisquam veritatis tempora cupiditate doloribuspossimus corrupti reprehenderit ratione?"
  }, 

  {
    image:testimoial3,
    namee: "alex despi",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing  Eius sequi quam quisquam veritatis tempora cupiditate doloribuspossimus corrupti reprehenderit ratione?"
  },
  {
    image:testimoial4,
    namee: "joe despi",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing  Eius sequi quam quisquam veritatis tempora cupiditate doloribuspossimus corrupti reprehenderit ratione?"
  }
]

const testimonials = () => {
  return (
    <section id="testimonials" className='testimonials' >
      <h5 className='testimonial-title'>review from client</h5>
      <h2 className='testimonial-title2'>Testimonial</h2>
<Swiper className="container testimonials__container"


spaceBetween={40}
slidesPerView={1}

pagination={{
  type: "progressbar",
}}
navigation={true}
modules={[Pagination, Navigation]}

>
      {
      data.map(({namee, review, image}, index) => {
        return(
          <SwiperSlide key={index} className="testimonial">
  <div className='client__avatar'>
    <img src={image} alt='' />
  </div>
  <h5 className='client__name'>{namee}</h5>
    <small className='client__review'>{review}</small>
</SwiperSlide>
        )
      })
      }
</Swiper>
    </section>
  )
}

export default testimonials


