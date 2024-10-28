import { star } from "../assets/icons";

const ReviewCard = ({ imageUrl, customerName, rating, feedback}) => {
    return (  
        <div className="flex justify-center items-center flex-col">
            <img 
                src={imageUrl} 
                alt="customer"
                className="rounded-full w-[120px] h-[120px] object-cover" 
            />
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

            <div className="flex mt-3 justify-center items-center gap-3">
                <img src={star} width={24} height={24} className="object-contain m-0"/>
                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="text-3xl font-palanquin mt-1 font-bold text-center"> 
                {customerName}
            </h3>
        </div>
    );
}
 
export default ReviewCard;