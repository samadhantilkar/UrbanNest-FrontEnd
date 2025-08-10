import icons from "@/lib/icon.jsx";

function Icon({icon, ...props}){
    const IconComponent = icons[icon];

    return <IconComponent {...props}/>
}
export default Icon;