import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin font-bold text-4xl text-center">
                What Our <span className="text-coral-red">Customers </span>
                Say?
            </h3>
            <p className="font-montserrat text-xl 
            text-slate-gray leading-normal mt-4 m-auto max-w-lg text-center">
            Hear genuine stories from our satisfied customers about their exceptional experiences with us.
            </p>
            <div className="flex max-lg:flex-col gap-14 flex-1 justify-evenly items-center mt-14">
                {reviews.map((review)=>(
                    <ReviewCard key={review.customerName}
                    imgURL={review.imgURL}
                    rating={review.rating}
                    customerName={review.customerName}
                    feedback={review.feedback} />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews;