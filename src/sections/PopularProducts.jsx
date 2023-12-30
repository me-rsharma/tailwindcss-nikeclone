import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
    return (
        <section id="products"
        className="max-container max-sm:mt-12"
        >
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular</span> Products</h2>
                <p className="text-slate-gray sm:max-w-xl font-montserrat text-lg leading-normal mt-2">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 lg:grid-cols-4 md:grid-cols-3 gap-14 sm:gap-4">
                    {products.map((product)=>{
                        return(
                            <PopularProductCard key={product.name} {...product}/>
                        ) 
                    })}
                    
                </div>
            </div>

        </section>
    )
}

export default PopularProducts;