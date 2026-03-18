import V1 from "../essential/Vector1.png";
import V2 from "../essential/Vector2.png";
import V3 from "../essential/Vector3.png";
import V4 from "../essential/Vector4.png";
import ridgeImage from "../essential/Ridge.png";
function Crack() {
    return (
        <div class="crack">
            <div class="mt-15 ">
    
                <p class="text-xs font-serif">Benefits</p><br/><br/>
                <h1 class="text-5xl font-bold px-3">We've cracked the code.</h1><br/>
                <p class="xs">Area provides real insights, without the data overload.</p>
                <br/><br/><br/>
    
    
                <ul class="flex justify-between px-3 py-2 text-xs font-extrabold">
                    <li><img src={V1} alt="" /></li>
                    <li><img src={V2} alt="" /></li>
                    <li><img src={V3} alt="" /></li>
                    <li><img src={V4} alt="" /></li>
                </ul>
     
                <ul class="flex justify-between px-3 py-2 text-xs font-bold">
                    <li class="">Amplify insights</li>
                    <li>Control your global resistance</li>
                    <li>Remove Language Barriers</li>
                    <li>Visualize Growth</li>

                </ul><br/>
    
                <ul class="flex justify-between px-3 py-2 text-xs font-semibold"> 
                    <li><p>Unlock data-driven decisions with<br/>comprehensive analytics, revealing<br/>key opportunities for strategic regional<br/>growth </p></li>
                    <li><p>Manage and track satellites offices<br/>ensuring consistent performance and<br/>streamlined operations everywhere.</p></li>
                    <li><p>Adapt to diverse markets with<br/>built-in localization for clear<br/>communication and enhanced user<br/>experience</p></li>
                    <li><p>Generate precise, visually<br/>compelling reports that illustrate<br/>your growth trajectories across all<br/>regions</p></li>
                </ul>
    
                <br/><br/>
                <img src={ridgeImage} alt="" class="mr-30 ml-3 h-150 w-300"/>
                <br/><br/><br/>
  
            </div>
        </div>    
    );
}
export default Crack;