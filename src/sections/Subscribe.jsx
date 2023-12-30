import Button from "../components/Button";

const Subscribe = () => {
    return (
        <section id="contact-us"
        className="max-container flex justify-between items-center max-lg:flex-col gap-10">
            <div>
                <h3 className="font-bold text-3xl font-palanquin">Sign Up for 
                    <span className="text-coral-red"> Updates</span> & Newsletter</h3>
            </div>
            <div className="lg:max-w-[40%] flex items-center sm:border sm:border-slate-gray rounded-full w-full max-sm:flex-col gap-5 p-2.5">
                <input type="text"
                placeholder="subscribe@nike.com"
                className="input"
                />
                <div className="flex justify-center items-center max-sm:w-full max-sm:justify-end">
                    <Button label="Sign Up" 
                    fullWidth />
                </div>
            </div>
        </section>
    )
}

export default Subscribe;