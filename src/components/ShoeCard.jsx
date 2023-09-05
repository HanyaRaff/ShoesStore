
const ShoeCard = ({ imgUrl, BigShoe, changeImage }) => {
  const handleClick = () => {
    if (imgUrl.bigShoe !== BigShoe) {
      changeImage(imgUrl.bigShoe)
    }
  }
  return (
    <div className={`rounded-xl ${imgUrl.bigShoe === BigShoe ? 'border-4 border-black' : 'border-0'}`}
    onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover 
      sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgUrl.thumbnail} alt="img"
          width={90}
          height={90}
        />
      </div>
    </div>
  )
}

export default ShoeCard