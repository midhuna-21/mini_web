import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
   <header className="flex items-center p-4 bg-zinc-900 text-white shadow-md">
   {/* Left Side - Adjusted with padding-left and increased gap */}
   <div className="flex gap-x-12 pl-10 text-lg font-semibold flex-1">
     <span>Air x</span>
     <span>Lexo z</span>
     <span>Gravity 9</span>
   </div>
 
   {/* Center - Ensure it's centered */}
   <div className="text-2xl font-bold flex-1 text-center">HyperDash</div>
 
   {/* Right Side - Added gap-x-12 for equal spacing */}
   <div className="flex gap-x-12 text-lg items-center flex-1 justify-end pr-10">
     <span>Shop</span>
     <span>Account</span>
     <FaBars className="text-2xl cursor-pointer" />
   </div>
 </header>
 
  );
};

export default Header;