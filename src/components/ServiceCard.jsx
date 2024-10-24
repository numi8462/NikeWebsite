const ServiceCard = ({ imageUrl, label, subtext}) => {
    return (  
        <div className="flex-1 w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
            <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
                <img src={imageUrl} alt="" />
            </div>
            
            <h3 className="font-bold text-3xl font-palanquin mt-5 leading-normal">{label}</h3>
            <p className="mt-3 info-text break-words">{subtext}</p>
        </div>
    );
}
 
export default ServiceCard;