import { useState } from "react";
import { Testimonials } from "../data/Testimonals";

const TestiMonials = () => {
    //eslint-disable-next-line
    const[people, Setpeople]= useState(Testimonials)
    return (
        <>
        <section className="py-10 px-5 lg:py-20 ">
            <h2 className='testimonials-header text-3xl uppercase tracking-wider text-center'>Client Testimonials</h2>
            <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-5 xl:max-w-6xl xl:mx-auto'>
            {people.map(({id, name,image, jobtitle,desc })=>(
                <article key={id}>
                    <img src={image} alt={name} className='w-20 rounded-full block mx-auto mt-10 mb-5'/>
                    <p className='text-center mb-5'>{desc}</p>
                    <h4 className='text-center'>{name}</h4>
                    <small className=' block text-center'>{jobtitle}</small>
                </article>
            ))}
            </div>
        </section>
            
        </>
    )
}
export default TestiMonials