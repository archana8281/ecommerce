import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [nav, setNav] = useState();
  useEffect(() => {
    const navbarFetch = async () => {
      const response = await fetch(
        `https://firestore.googleapis.com/v1/projects/ecommerce-79a2b/databases/(default)/documents/categories`
      );
      const data = await response.json();
      setNav(data.documents);
    };
    navbarFetch();
  }, []);
  console.log({ nav });
  return (
    <div className="nav">
      <div className="container">
        <ul className="ul-itm">
          {nav?.map((item) => (
            <li
              className="itm"
              // href={`/collection/${item?.fields?.slag?.stringValue}?id=${item?.fields?.id?.stringValue}`}
              onClick={()=>{
              navigate(`/collection/${item?.fields?.slug?.stringValue}?id=${item?.fields?.id?.integerValue}`)
              }}
            >
              {item.fields.name.stringValue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
