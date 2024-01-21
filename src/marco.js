import marco1 from "./assets_3/1004.png"; 
import marco2 from "./assets_3/493.png"; 
import marco3 from "./assets_3/639.png"; 
import marco4 from "./assets_3/471.png"; 
import {motion} from 'framer-motion'; 

const Description =  "Marco"

export default function Marco() {
    return (
        <div className="About">
            <h1 className="Marco_Title"></h1>
            <h2 className="about_title"></h2>
                <p className="marco_description">
                A self-taught digital artist, Marco embarked on his creative journey in his teens, igniting a passion that has since become the cornerstone of his career. From Europe, Marco is committed to crafting visual marvels that transcend boundaries, captivating audiences across the globe.

                Throughout his career, Marco has utilised his artistic prowess into freelance projects, catering to a diverse array of private clients. However, amidst these achievements, a craving to express his personal creativity lingered.  <br/><br/>
                Since 2018, Marco has been a advocate and user of the crypto realm, witnessing the evolution and ascent of NFTs. To him, this technological progression represents more than just a platform; it's an artist's haven, a space brimming with opportunities to unleash creativity and to create a lasting legacy.
 
                </p>


            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='marco1'
                >
                    <img className="marco_1" src={marco1} alt="471" />
            </motion.div>


            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='marco2'
                >
                    <img className="marco_2" src={marco2} alt="493" />
            </motion.div>

            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='marco3'
                >
                    <img className="marco_3" src={marco3} alt="639" />
            </motion.div>


            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='marco4'
                >
                    <img className="marco_4" src={marco4} alt="1004" />
            </motion.div>
            

        </div>
    )
}