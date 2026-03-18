function Table() {
    return(
        <div className="table">
            <div className="mt-30 px-3 py-2">
                <p className="flex justify-center text-gray-500 text-xs">Specs</p><br/><br/>
                <h2 className="flex justify-center text-7xl font-bold">Why Choose Area?</h2>
                <br/><br/>
                <p className="flex justify-center text-gray-500 text-xs">You need a solution that keeps up.That's why we developed Area.A developer-friendly approach to<br/>streamline your business </p>
                <br/><br/>
    
                <button className="flex justify-center ml-140 bg-gray-700 text-white rounded-2xl px-2  h-8 w-26"><a href="">Discover more</a></button>
                <br/><br/><br/>
                <ul className="flex justify-between px-4">
                    <li className="px-20 font-bold">Area</li>
                    <li className="font-SFMono-Regular text-gray-400 mr-4 ">WebSuge</li>
                    <li className="font-SFMono-Regular text-gray-500 mr-7">HyperView</li>
                </ul>
            </div>
            <hr className="ml-6 mask-linear-from-blue-600"/>
            <br/>
            <div>
                <ul className="flex justify-between">
                    <ul className="ml-12">
                        <li>Ultra-fast browsing</li>
                        <li>Advanced AI insights</li>
                        <li>Seamless integration</li>
                        <li>Advanced AI insights</li>
                        <li>Ultra fast browsing</li>
                        <li>Full UTF-8 support</li>
                    </ul>
                    <ul className="mr-10">
                        <li>Fast browsing</li>
                        <li>Basic AI recommendations</li>
                        <li>Restricts customisation</li>
                        <li>Basic AI insights</li>
                        <li>Fast browsing</li>
                        <li>Potential display errors</li>
                    </ul>
                    <ul className="mr-10">
                        <li>Moderate speeds</li>
                        <li>No AI assistance</li>
                        <li>Steep Learning curve</li>
                        <li>No AI assistance</li>
                        <li>Moderate speeds</li>
                        <li>Limited character support</li>
                    </ul>
                </ul>
            </div>
        </div>
    );

}
export default Table;