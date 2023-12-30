import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
    return (
        <section className="flex justify-center items-center 
        max-container w-full max-xl:flex-col-reverse gap-10">
            <div className="flex-1">
                <img src={offer} alt="offer"
                    width={773} height={687}
                    className="object-contain w-full"
                />
            </div>
            <div className="flex flex-col flex-1">
                <h2 className="font-palanquin 
                font-bold text-4xl lg:max-w-lg capitalize">
                    <span
                        className="text-coral-red">
                        Special </span> Offers
                </h2>
                <p className="info-text mt-4 lg:max-w-lg">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className="info-text mt-6 lg:max-w-lg">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>

                <div className="mt-11 flex gap-4 flex-wrap">
                    <Button label="Shop now"
                        iconUrl={arrowRight}
                    />
                    <Button label="Learn more"
                        backgroundColor="bg-white"
                        borderColor="border-slate-gray"
                        textColor="text-slate-gray"
                    />
                </div>

            </div>
        </section>
    )
}

export default SpecialOffers;