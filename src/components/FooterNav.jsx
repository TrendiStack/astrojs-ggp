import Icon from './icons/Icon';

const FooterNav = ({ menuItem, className }) => {
  return (
    <div className={`${className}`}>
      {menuItem ? (
        <ul className="grid grid-cols-1 lg:flex gap-2 lg:gap-5">
          <li>3650 Langstaff Rd</li>
          <li>Woodbridge, ON</li>
          <li>(905) 851-0400</li>
        </ul>
      ) : (
        <ul className="flex gap-5">
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Our Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FooterNav;
