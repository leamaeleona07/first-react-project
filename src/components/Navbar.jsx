import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Welcome</h1>
      <div className="links">
              <Link to="/">Home</Link>
              <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;













// import { useRef } from "react";

// const Navbar = ({className}) => {
//   const links = [
//     { label: "Home", href: "#" },
//     { label: "About Us", href: "#" },
//     { label: "Family Activities", href: "#" },
//     { label: "McDelivery", href: "#" },
//     { label: "Careers", href: "#" },
//     { label: "Opportunities", href: "#" },
//   ];

//   return (
//     <nav className={`border border-gray-200 h-16 ${className}`}>
//       <ul className="w-screen flex h-full items-center gap-5 justify-center font-bold">
//         {links.map((link, index) => (
//           <ul className="text-red-500 hover:text-teal-300" key={index}>
//             <a href={link.href}>{link.label}</a>
//           </ul>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

