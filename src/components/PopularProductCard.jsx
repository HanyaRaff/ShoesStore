import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-col flex-1 w-full max-sm:w-full'>

      <img src={imgURL} alt={name}
        className='w-full h-[280px]'
      />

      <div className='mt-3 flex items-center justify-between max-md:justify-around py-2'>

        <div className='flex justify-center items-center gap-2'>
          <img src={star} alt="rating"
            width={22}
            height={22}
          />
          <p className='font-montserrat font-semibold text-xl'>4.5</p>
        </div>

        <h1 className='font-montserrat font-semibold text-sm'>{price}</h1>
      </div>

      <div className='my-2 max-md:text-center'>
        <h1 className='font-montserrat font-semibold max-md:text-md text-lg'>{name}</h1>
      </div>
    </div>
  )
}

export default PopularProductCard