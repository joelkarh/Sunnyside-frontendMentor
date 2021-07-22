import { useState } from "react";
import { graphicMobile } from "../data/graphic";

const GraphicMobile = () => {
    //eslint-disable-next-line 
    const[cards,setCards] = useState(graphicMobile)
    return (
        <>
            <section>
                {cards.map(({id, image,title, text}) => ( // ronde haken omdat het shortcut gebruikt wzonder return key
                    <article key={id} className='relative'>
                     <img src={image} alt={title}/>
                     <div className='absolute bottom-5 text-center left-0'>
                     <h3 className="text-xl mb-5">{title}</h3> 
                     <p>{text}</p>
                     </div>
                    </article>
                ))}
            </section>
        </>
    )
}

export default GraphicMobile
