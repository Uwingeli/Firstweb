import Cy from "../essential/cyclinder.png";
function Grid(){
    return(
        <div className="grid">
            <div className="grid grid-cols-2 gap-3">
                <div className="px-3 py-2">
      
                    <h3 className="font-bold font-serif text-4xl">See the big picture</h3>
                    <br/>
                    <p>Area turns your data into clear,vibrant visuals that shows you exactly<br/>what's hapenning in each region</p>
                    <ol className="mt-6">
                        <li>Spot trends</li>
                        <li>Get everyone on the same page:Share easy-to-understand<br/>reports with your team</li>
                        <li>Make representation Pop:Interactive maps and dashboards keep<br/>your audience engaged</li>
                        <li>Your global Snapshot :Get a quick, clear overview of your entire<br/>Operation.</li>

                    </ol>
                    <br/><br/>
                    <button><a href="">Discover more</a></button>
                </div>
                <div>
                <img src={Cy} alt="" className="h-120 w-300"/>
                </div>
            </div>
        </div>

    );
}
export default Grid;