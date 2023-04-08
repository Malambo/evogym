import Logo from '@/assets/Logo.png'


const Footer = () => {
  return (
    <footer className='py-16 bg-primary-100'>
        <div className='justify-between w-5/6 gap-16 mx-auto md:flex'>
            
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt='logo' />
                <p className='my-5'>
                    Dolor tempor eu est dolor aliquip aute Lorem laborum non duis eu. Exercitation quis sunt dolore fugiat velit ut velit id ex laborum occaecat.
                </p>
            </div>
            
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5 cursor-pointer hover:underline'>Eu est dolor aliquip</p>
                <p className='my-5 cursor-pointer hover:underline'>Dolore fugiat velit ut velit</p>
                <p className='my-5 cursor-pointer hover:underline'>Ullamcorper vivamus</p>
            </div>
            
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Exercitation quis sunt dolore</p>
                <p>(0333)425-6825</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
