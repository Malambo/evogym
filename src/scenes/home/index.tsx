import {SelectedPage} from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {motion} from 'framer-motion'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAbobeMediumScreens = useMediaQuery('(min-width: 860px)')

  return (
    <section
    id='home'
    className='gap-16 py-10 bg-gray-20 md:h-full md:pb-0'
    >
        {/* IMAGEN Y CABECERA PRINCIPAL */}
        <motion.div
        className='items-center justify-center w-5/6 mx-auto md:flex md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* CABECERA PRINCIPAL */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* ENCABEZADOS */}
                <motion.div
                className='md:-mt-20'
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                >
                    <div className='relative'>
                        {/* content-evolvetext está definido en tailwind.config.js y apunta a la url de EvolveText.png*/}
                        <div className='before:absolute before:-top-16 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                            <img
                            src={HomePageText}
                            alt='home-page-text' />
                        </div>
                    </div>
                    <p className='mt-8 text-sm'>
                        Unrivaled Gym. Unaralleled training fitness clases. World class studios to get the body shapes that yhou dream of. Get your dream body now.
                    </p>
                </motion.div>

                {/* ACCIONES */}
                <motion.div
                className='flex items-center gap-8 mt-8 md:justify-start'
                initial={{opacity: 0, scale: 0.5}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.1, duration: 0.5}}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    
                    <AnchorLink
                    className='text-sm font-bold transition duration-500 cursor-pointer text-primary-500 hover:underline hover:text-secondary-500'
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn more</p>
                    </AnchorLink>
                </motion.div>
            </div>
            
            {/* IMAGEN */}
            <div className='flex justify-center md:z-10 basis-3/5 md:ml-40 md:mt-16 md:justify-items-end'>
                <img src={HomePageGraphic} alt='home-page-Graphic' />
            </div>
        </motion.div>

        {/* SPONSORS */}
        {isAbobeMediumScreens && (
            <div className='h-[9rem] w-full bg-primary-100 py-10'>
                <div className='w-5/6 mx-auto'>
                    <div
                    className='flex items-center justify-between w-3/5 gap-8'
                    >
                        <img src={SponsorRedBull} alt='SponsorRedBull' />
                        <img src={SponsorForbes} alt='SponsorForbes' />
                        <img src={SponsorFortune} alt='SponsorFortune' />
                    </div>
                </div>
            </div>
        )}
        
    </section>
  )
}

export default Home
