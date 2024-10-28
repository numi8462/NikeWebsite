import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const SpecialOffer = () => {
    return ( 
        <section
            id="offer"
            className="flex justify-between items-center w-full max-container max-xl:flex-col-reverse gap-10"
        >
            <div className="flex-1">
                <img src={offer} alt="Shoe promo" width={773} height={687} className="object-contain w-full"/>
            </div>
            <div className="flex flex-1 flex-col">
                <h1 className="text-4xl font-palanquin font-bold">
                    <span className="text-coral-red">Special</span> <span>Offer</span>
                </h1>
                <p className="info-text mt-5">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings we offer unparalleled value that sets us apart.</p>
                <br />
                <p className="info-text">Navigate a realm of possibilities designed to fullfill your unique desires surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>

                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop now" iconUrl={arrowRight}/>
                    <Button
                        label='Learn more'
                        backgroundColor='bg-white'
                        borderColor='border-slate-gray'
                        textColor='text-slate-gray'
                    />
                </div>
                
            </div>
        </section>
    );
}
 
export default SpecialOffer;