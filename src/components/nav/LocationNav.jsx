const LocationNav = ({ menuItem, className }) => {
  return (
    <div className={`${className}`}>
      {menuItem ? (
        <ul className="grid grid-cols-1 lg:flex gap-2 lg:gap-5">
          <li>
            <a
              href="https://www.google.com/maps?ll=43.808928,-79.54804&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=16934071278796745487"
              target="_blank"
            >
              3650 Langstaff Rd Woodbridge, ON
            </a>
          </li>
          <li>
            <a href="tel:+905-851-0400">(905) 851-0400</a>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-5">
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps?ll=43.808928,-79.54804&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=16934071278796745487"
              target="_blank"
            >
              Location
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LocationNav;
