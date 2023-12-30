import { star } from "../assets/icons";

const ReviewCard = ({ customerName, imgURL, rating, feedback }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={imgURL} alt="customer"
            className="rounded-full w-[120px] h-[120px] object-cover" />
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img src={star} 
                width={24}
                height={24}
                className="object-contain"
                />
                <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
            </div>
            <h3 className="font-bold font-palanquin text-center text-3xl mt-1">{customerName}</h3>
        </div>
    )
}

export default ReviewCard;