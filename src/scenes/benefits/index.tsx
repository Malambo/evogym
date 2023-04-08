import ActionButton from '@/shared/ActionButton'
import HText from '@/shared/HText'
import {BenefitType, SelectedPage} from '@/shared/types'
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import Benefit from './Benefit'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='w-6 h-6' />,
    title: 'State of the Art Facilities',
    description:
      'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
 },
  {
    icon: <UserGroupIcon className='w-6 h-6' />,
    title: "100's of Diverse Classes",
    description:
      'Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.',
 },
  {
    icon: <AcademicCapIcon className='w-6 h-6' />,
    title: 'Expert and Pro Trainers',
    description:
      'Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.',
 },
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.5},
 },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='w-5/6 min-h-full py-20 mx-auto'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className='md:my-5 md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
         }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <motion.p
          className='my-5 text-sm'
          animate={{x: [-50, 150, 0], opacity: 1, scale: 1}}
          transition={{
              duration: 0.2,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{opacity: 0, scale: 0.5}}
            whileHover={{scale: 1.2}}
          >
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
          </motion.p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className='items-center justify-between gap-4 mt-5 md:flex'
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className='items-center justify-between gap-20 mt-16 md:mt-28 md:flex'>
          {/* GRAPHIC */}
          <img
            className='mx-auto'
            alt='benefits-page-graphic'
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-10 before:z-[1] before:content-abstractwaves'>
                <motion.div
                  initial='hidden' whileInView='visible'
                  viewport={{once: true, amount: 0.5}}
                  transition={{duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity: 1, x: 0},
                 }}
                >
                  <HText>
                    Millions of happy members getting{' '}
                    <span className='text-primary-500'>fit</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{delay: 0.2, duration: 0.3}}
              variants={{
                hidden: {opacity: 0, x: 50},
                visible: {opacity: 1, x: 0},
             }}
            >
              <p className='my-5'>
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.
              </p>
              <p className='mb-5'>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in nunc.
              </p>
            </motion.div>

            {/* BUTTON */}
            <motion.div
            className='relative mt-16'
            initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
            >
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
