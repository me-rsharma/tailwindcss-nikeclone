const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center gap-2 border 
        font-montserrat text-lg rounded-full px-7 py-4 
        leading-none ${fullWidth && 'w-full'} ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}` : 'text-white border-coral-red bg-coral-red'}` }>
            {label}
            {iconUrl && <img src={iconUrl} alt="arrow right icon" className="rounded-full"
            />}
            
        </button>
    )
}

export default Button;