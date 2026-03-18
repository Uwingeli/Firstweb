import diskImage from '../essential/Disk.png'
function Disk() {
    return (
        <div className="disk">
            <div className="mt-30 grid grid-cols-2 gap-20">
                <div className="ml-6" >
                    <img src={diskImage} alt="" className="h-150 w-200"/>
                </div>
                <div className="text-2xl mt-8 font-semibold font-serif mr-10 px-2 py-2">
                    <p>"I was skeptical, but Area has<br/>completely transformed the way I<br/>manage my business.The data<br/>visualization are so clear and<br/> intuitive, and platform is so easy<br/> to use, I can't imagine running my<br/> company without it."</p>
                 </div>
            </div>
        </div>
    );
}
export default Disk;