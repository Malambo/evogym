import {motion} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {BenefitType, SelectedPage} from "@/shared/types"

const childVariant = {
    hidden: {opacity: 0, scale: 0.75},
    visible: {opacity: 1, scale: 1},
}

interface Props extends BenefitType {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div
    className='px-5 py-16 mt-5 text-center border border-gray-100 md:h-96 rounded-2 basis-1/3'
    variants={childVariant}
    >
        <div className='flex justify-center mb-4'>
            <div className='p-4 border-2 border-gray-100 rounded-full bg-primary-100'>
                {icon}
            </div>
        </div>

        <h4 className='font-bold'>{title}</h4>
        <p className='py-3'>{description}</p>
        <AnchorLink
        className='text-sm font-bold transition duration-500 cursor-pointer text-primary-500 hover:underline hover:text-secondary-500'
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        >
            <p>Learn more</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit