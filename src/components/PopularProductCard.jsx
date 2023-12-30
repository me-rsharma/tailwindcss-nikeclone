import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price })=>{
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} 
            alt={name}
            width={280}
            height={280}
            />
            <div className="flex flex-col justify-start mt-8 gap-2.5">
                <img src={star} alt="rating"
                width={24}
                height={24} 
                />
                <p className="font-monserrat text-xl text-slate-gray">(4.5)</p>
                <h3 className="mt-2 text-2xl font-semigold font-palanquin leading-normal">{name}</h3>
                <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red">{price}</p>
            </div>
        </div>
    )
}

export default PopularProductCard;