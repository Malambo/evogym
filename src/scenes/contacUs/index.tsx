import {useForm} from 'react-hook-form'
import {motion} from 'framer-motion'
import {SelectedPage} from "@/shared/types"
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const inputStyles = `w-full px-5 py-3 placeholder-white rounded-lg bg-primary-300 mt-5`


const ContactUs = ({setSelectedPage}: Props) => {
    const {register, trigger, formState: {errors}} = useForm()
    
    const onSubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }
    
    return (
        <section
        id='contact-us'
        className='w-5/6 pt-24 pb-32 mx-auto'
        >
            <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/* CABECERA */}
                <motion.div
                className='md:w-3/5'
                initial='hidden' whileInView='visible'
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
                >
                    <HText>
                        <span className='text-primary-500'>Join now {' '}</span> to get in shape
                    </HText>
                    <p className='my-5'>
                        Adipisicing adipisicing irure sit deserunt adipisicing excepteur proident duis qui esse dolore officia fugiat dolore. Nisi in irure excepteur reprehenderit commodo cillum exercitation occaecat non voluptate occaecat dolor. 
                    </p>
                </motion.div>
                
                {/* FORMULARIO E IMAGEN */}
                <div className='justify-between gap-8 mt-10 md:flex'>
                    <motion.div
                    className='mt-10 basis-3/5 md:mt-0'
                    initial='hidden' whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                    >
                        <form
                        target='_blank'
                        onSubmit={onSubmit}
                        method='POST'
                        action='https://formsubmit.co/e3d8b7fdb97abc6795901cb7564ccead'
                        >
                           <input
                           className={inputStyles}
                           type="text"
                           placeholder='NAME'
                           {...register('name', {required: true, maxLength: 100})}
                           />
                           {errors.name && (
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type === 'required' && 'This field is required'}
                                {errors.name.type === 'maxLength' && 'Max lenght is 100 characters'}
                            </p>
                           )}
                           
                           <input
                           className={inputStyles}
                           type="email"
                           placeholder='EMAIL'
                           {...register('email', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                           />
                           {errors.email && (
                            <p className='mt-1 text-primary-500'>
                                {errors.email.type === 'required' && 'This field is required'}
                                {errors.email.type === 'pattern' && 'Invalid email address.'}
                            </p>
                           )}
                           
                           <textarea
                           className={inputStyles}
                           placeholder='MESSAGE'
                           {...register('message', {required: true, maxLength: 1500})}
                           />
                           {errors.message && (
                            <p className='mt-1 text-primary-500'>
                                {errors.message.type === 'required' && 'This field is required'}
                                {errors.message.type === 'maxLength' && 'Max lenght is 1500 characters'}
                            </p>
                           )}
                           
                           <button
                           type='submit'
                           className='px-20 py-3 mt-5 transition duration-500 rounded-lg bg-secondary-500 hover:text-white'
                           >
                            Submit
                           </button>
                        </form>
                    </motion.div>
                    
                    <motion.div
                    className='relative mt-16 basis-2/5 md:mt-0'
                    initial='hidden' whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 150},
                        visible: {opacity: 1, y: 0},
                    }}
                    >
                        <div className='w-full md:before:content-evolvetext before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                            <img
                             className='w-ful'
                             alt='contact us image'
                             src={ContactUsPageGraphic}
                             />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
  )
}

export default ContactUs
