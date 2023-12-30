import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    return (
        <section
            id="home"
            className="flex flex-col xl:flex-row justify-center gap-10 
            max-container w-full min-h-screen border-red-500"
        >
            <div className="relative flex flex-col justify-center items-start 
            xl:w-2/5 w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold">
                    <span className="relative z-10 xl:bg-white xl:whitespace-nowrap pr-10">The New Arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals,
                    quality comforts and innovation
                    for your active life
                </p>
                <Button label="Shop Now"
                    iconUrl={arrowRight}
                />
                <div className="flex justify-starts items-start gap-16 flex-wrap w-full mt-20">
                    {statistics.map((stat, index)=>{
                        return(
                            <div key={index}>
                                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                                <p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex relative justify-center items-center 
            flex-1 bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
                <img src={bigShoeImg} alt="Shoe Collection"
                width={610}
                height={500} 
                className="object-contain relative z-10"/>
                {/* z-10 to come above the background */}
                <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] max-sm:px-6 sm:left-[10%]">
                    {shoes.map((shoe)=>(
                        <div key={shoe}>
                            <ShoeCard 
                            imgURL={shoe}
                            changeBigShoeImage={
                                (shoe) => { setBigShoeImg(shoe)}
                            }
                            bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Hero;