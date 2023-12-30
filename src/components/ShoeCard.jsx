const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    // very very important - {imgURL, changeBigShoeImage, bigShoeImg} curly braces must
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    }

    return (
        <div className={`border-2 rounded-xl 
        ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} max-sm:flex-1`
        }
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt='shoe collection'
                    width={127}
                    height={103.34}
                    className='object-contain'
                />
            </div>
            {/* As we have to make border only for selected item we nned to write if else condition */}
        </div>
    )
}

export default ShoeCard;