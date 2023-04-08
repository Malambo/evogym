import {ClassType} from "@/shared/types"


const Class = ({name, description, image}: ClassType) => {
  const overlayStyles = `
  absolute flex flex-col
  z-30 h-[380px] w-[450px]
  items-center justify-center
  whitespace-normal p-5
  bg-primary-500 opacity-0
  text-center text-white
  transition duration-500
  hover:opacity-90`

  return (
    <li className='relative inline-block mx-5 h-[380px] w-[450px]'>
      <div className={overlayStyles}>
        <p className='text-2xl'>{name}</p>
        <p className='mt-5'>{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Class
