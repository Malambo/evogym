import {motion} from 'framer-motion'
import {SelectedPage, ClassType} from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import HText from '@/shared/HText'
import Class from './Class'


const classes: Array<ClassType> = [
    {
        name: 'Weight Training Classes',
        description: 'Nulla eiusmod irure incididunt ad deserunt et magna excepteur sunt nulla ex adipisicing. Deserunt dolor in irure nulla.',
        image: image1
    },
    {
        name: 'Yoga Classes',
        image: image2
    },
    {
        name: 'Ab Core Classes',
        description: 'Labore aute duis incididunt nisi duis esse ad ipsum velit ullamco sit ea.',
        image: image3
    },
    {
        name: 'Adventure Classes',
        description: 'Consequat magna ipsum proident reprehenderit voluptate fugiat laborum exercitation excepteur cupidatat cupidatat. Magna consectetur irure irure nisi enim id velit nulla veniam ut sunt eu.',
        image: image4
    },
    {
        name: 'Fitness Classes',
        description: 'Laborum id laboris tempor exercitation. Dolor adipisicing velit in minim sint nisi eu irure. Proident ut eu sunt ea fugiat veniam amet minim aliqua fugiat consequat velit nostrud.',
        image: image5
    },
    {
        name: 'Training Classes',
        description: ' Veniam qui officia deserunt culpa sunt aute cupidatat. Consequat elit aliqua mollit laborum ad ullamco dolor culpa. Qui duis consectetur aute non ad ut quis quis cupidatat fugiat. Proident irure minim non ex id ea nulla excepteur non eu aute sint qui.',
        image: image6
    },
]
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='our-classes' className='w-full py-20 bg-primary-100'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
            className='w-5/6 mx-auto'
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            >
                <div className='md:h-1/3'>
                    <HText>Our Classes</HText>
                    <p className='py-5'>
                        Mollit aliquip deserunt voluptate nisi eu eu. Ipsum sit magna officia laboris occaecat nostrud. Ex est culpa tempor culpa reprehenderit culpa veniam fugiat velit incididunt ad veniam amet excepteur. Qui magna fugiat excepteur laboris.
                    </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index) => (
                        <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses
