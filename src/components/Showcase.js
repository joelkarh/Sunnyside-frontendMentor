import arrow from '../assets/icon-arrow-down.svg'
const Showcase = () => {
    return (
        <section className
        ='showcase'>
        <div className='overlay'>
            <h1 className="text-4xl uppercase text-white tracking-widest text-center sm:text-left">We are creatives</h1>
            <img src={arrow} alt="arrow-down " className='mt-20'/>
        </div>
        </section>
    )
}
 export default Showcase;