import {useEffect, useState} from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import Link from './Link'
import {SelectedPage} from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'


type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = 'flex items-center justify-between'
  const isAbobeMediumScreens = useMediaQuery('(min-width: 860px)')
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  return (
    <nav>
      <div
      className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LADO IZQUIERDO */}
            <img alt='logo' src={Logo} />

            {/* LADO DERECHO */}
            {isAbobeMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              
              {/* NAVBAR */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page='Benefits'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page='Our Classes'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page='Contact Us'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
              </div>

              {/* USUARIO */}
              <div className={`${flexBetween} gap-8`}>
                <Link
                page='Sign In'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <ActionButton
                setSelectedPage={setSelectedPage}
                >
                  Become a Member
                </ActionButton>
              </div>
            </div>)
            : (
              <button
              className='p-2 rounded-full bg-secondary-500'
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className='w-6 h-6 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MENÚ MODAL PARA MÓVILES */}
      {!isAbobeMediumScreens && isMenuToggled && (
        <div className='fixed bottom-0 right-0 z-40 h-full w-[20rem] bg-primary-100 drop-shadow-xl'>
          
          {/* ICONO CERRAR */}
          <div className='flex justify-end p-12'>
            <XMarkIcon
            className='w-6 h-6 text-gray-400 cursor-pointer'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            />
          </div>
          
          {/* MENÚ VERTICAL */}
          <div className={'ml-[33%] flex flex-col gap-10 text-xl'}>
            <Link
            page='Home'
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link
            page='Benefits'
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link
            page='Our Classes'
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link
            page='Contact Us'
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
