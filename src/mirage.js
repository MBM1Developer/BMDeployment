import bright_light from "./assets_2/612.png"; 
import paint_autumn from "./assets_2/687.png"; 
import swirl_colour from "./assets_2/712.png"; 
import swirl_main from "./assets_2/754.png";
import {motion} from 'framer-motion'; 

const Description =  "MIRAGE"

export default function Mirage() {
    return (
        <div className="About">
            <h1 className="Main_Title"></h1>
            <h2 className="about_title"></h2>
                <p className="about_description">
                A meticulously handcrafted collection of 1054 pieces by Marco. Each piece is thoughtfully curated, offering a unique and visually captivating journey through the intricate tapestry of life.

                This collection marks Marco's first creative release in the NFT space, embodying the essence of life's vibrant chaos, beautifully expressed in each piece.
               <br/><br/>

                Owning pieces from this genesis collection may unlock special access and utility for forthcoming works personally curated by Marco. It's not just an ownership of art; it's an invitation to be part of an evolving artistic narrative, granting exclusive opportunities to delve deeper into the world of Marco's creations.

 
                </p>


            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='BRIGHT_LIGHT'
                >
                    <img className="bright_light" src={bright_light} alt="" />
            </motion.div>


            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='PAINT_AUTUMN'
                >
                    <img className="paint_autumn" src={paint_autumn} alt="" />
            </motion.div>

    

            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='SWIRL_CENTER'
                >
                    <img className="swirl_main" src={swirl_main} alt="" />
            </motion.div>
            

        </div>
    )
}