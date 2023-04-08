import {ReactNode} from "react"

type Props = {
    children: ReactNode
}

const HText = ({children}: Props) => {
  return (
    <h1
    className='text-3xl font-bold uppercase basis-3/5 font-montserrat'
    >
        {children}
    </h1>
  )
}

export default HText
