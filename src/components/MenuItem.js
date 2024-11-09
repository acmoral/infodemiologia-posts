import React, { useState, useEffect, useRef } from "react";

function MenuItem({ post }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // Toggle the active menu
  };

  // Close the menu if a click occurs outside of the menu component
  useEffect(() => {
    const handleClickOutside = (event) => {
        setActiveMenu(null); // Close the menu
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li className="nav-item group relative" ref={menuRef}>
      {post.subMenu.length === 0 ? (
        <a href={post.href} className="hover:text-gray-200">
          {post.name}
        </a>
      ) : (
        <button
          onClick={() => handleMenuClick(post.name)}
          className="hover:text-gray-200 focus:outline-none"
        >
          {post.name}

          {/* Only render the submenu if it's active */}
          {activeMenu === post.name && (
            <ul className="sublist absolute left-0 w-full bg-gray-700 text-white top-full">
              {post.subMenu.map((subItem, index) => (
                <li key={index} className="px-4 py-2">
                  <a href="#" className="block hover:text-gray-700">
                    {subItem}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </button>
      )}
    </li>
  );
}

export default MenuItem;
