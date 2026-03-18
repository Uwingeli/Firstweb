function Footer() {
    return (
        <div className="footer">
            <div className="mt-20">
                <ul className="flex justify-between mr-250 ml-4  text-xs font-semibold">
                    <li>Benefits</li>
                    <li>Specifications</li>
                    <li>How-to</li>
                </ul>

                <footer className="grid grid-cols-2">
                    <p className=" text-gray-500 text-xs mt-10 ml-20">© Area. 2025.</p>
                    <p className="flex justify-end text-gray-500 text-xs mt-10 mr-4">All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
export default Footer;