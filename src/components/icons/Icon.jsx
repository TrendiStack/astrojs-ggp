import { CgFacebook } from 'react-icons/cg/index';
import { AiOutlineInstagram } from 'react-icons/ai/index';
import { SiTripadvisor } from 'react-icons/si/index';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

const Icon = () => {
  const { menu } = useContext(MenuContext);
  const icons = [
    {
      name: 'Facebook',
      icon: <CgFacebook />,
      link: 'https://www.facebook.com/GelatoGelatoPizzeria/',
    },
    {
      name: 'Instagram',
      icon: <AiOutlineInstagram />,
      link: 'https://www.instagram.com/gelatogelatoinc/?hl=en',
    },
    {
      name: 'Tripadvisor',
      icon: <SiTripadvisor />,
      link: 'https://www.tripadvisor.ca/Restaurant_Review-g562671-d12870734-Reviews-Pizzeria_Gelato_Gelato-Woodbridge_Vaughan_Ontario.html',
    },
  ];

  return (
    <div className="flex gap-5">
      {icons.map(icon => (
        <a
          key={icon.name}
          href={icon.link}
          target="_blank"
          rel="noreferrer"
          className={`${
            menu ? 'bg-white text-[#252422]' : 'bg-[#252422] text-white'
          } text-lg lg:text-3xl aspect-square p-2 lg:p-8 rounded-full`}
        >
          {icon.icon}
        </a>
      ))}
    </div>
  );
};

export default Icon;
