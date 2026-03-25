import Logo1 from "../essential/Logo.png";
import Logo2T from "../essential/Logo2.png";
import Logo3S from "../essential/Logo3.png";
import Logo4F from "../essential/Logo4.png";
import Logo5F from "../essential/Logo5.png";
import Logo6S from "../essential/Logo6.png";
function Trust() {
    return (
        <div className="trust">
            
            <div className="mt-12">
                <p> Trusted by:</p>
                <ul className="flex justify-between px-3 py-2 text-xs font-extrabold">
                   <li><img src={Logo1} alt=""  /></li>
                   <li><img src={Logo2T} alt="" /></li>
                   <li><img src={Logo3S} alt="" /></li>
                   <li><img src={Logo4F} alt="" /></li>
                   <li><img src={Logo5F} alt="" /></li>
                   <li><img src={Logo6S} alt="" /></li>

                </ul>
            </div>
        </div>   
        
    );
}
export default Trust;