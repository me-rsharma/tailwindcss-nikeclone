import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center 
            max-container gap-10 w-full max-lg:flex-col">
            <div className="flex flex-col flex-1">
                <h2 className="font-palanquin 
                font-bold text-4xl lg:max-w-lg capitalize">
                    We Provide You <span
                        className="text-coral-red">
                        Super </span>
                    <span
                        className="text-coral-red">
                        Quality
                    </span> Shoes
                </h2>
                <p className="info-text mt-4 lg:max-w-lg">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className="info-text mt-6 lg:max-w-lg">Our dedication to detail and excellence ensures your satisfaction</p>
                <div className="mt-11">
                    <Button label="View details" />
                </div>

            </div>
            {/* wrapper div for image */}
            <div>
                <img src={shoe8} alt="shoe8" 
                width={570}
                height={522}
                className="object-contain"
                />
            </div>

        </section>
    )
}

export default SuperQuality;