function Navbar() {
  return (
    <nav className="navbar">
      <div class="flex justify-between px-4 py-2">
    <h4 class="text-lg font-semibold">Area</h4>
    <ul class="flex justify-between gap-3 px-3 py-2 text-xs font-semibold">
      <li><a href="">Benefits</a></li>
      <li><a href="">Specifications</a></li>
      <li><a href="">How-to</a></li>
      <li><a href="">Contact us</a></li>
    </ul>
    <button class="flex bg-green-700 text-white rounded-2xl px-2  h-8 w-26"><a href="">Learn more</a>
    </button>
  </div>
    </nav>
  );
}
export default Navbar;