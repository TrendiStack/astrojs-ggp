import FlavourContainer from './FlavourContainer';
import FlavourTypeButton from '../../../components/menu/FlavourTypeButton';
import Header from '../../../components/Header';
import ScrollAlert from '../../../components/menu/ScrollAlert';
import useIsMobile from '../../../utils/useIsMobile';
import FlavourSelect from '../../../components/menu/FlavourSelect';
import Footer from '../../../components/Footer';

const UnanimatedMenu = ({ selected, setSelected }) => {
  const isMobile = useIsMobile();

  return (
    <div className="overflow-hidden lg:hidden">
      {!isMobile && <ScrollAlert />}
      <Header route="menu" />
      <div className="flex flex-col gap-20 pt-10 pb-48">
        <FlavourContainer header="gelato - flavours">
          <div className="flex items-start justify-center text-center gap-10">
            <FlavourTypeButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="regular"
              type="gelato"
            />
            <FlavourTypeButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="sorbet"
              type="gelato"
            />
            <FlavourTypeButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="soy"
              type="gelato"
            />
          </div>
          <FlavourSelect selected={selected.categoryOne} type="gelato" />
        </FlavourContainer>
        <FlavourContainer header="dining - options">
          <div className="grid grid-cols-2 place-content-center justify-center text-center gap-5 mb-10">
            <FlavourTypeButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="pizza"
            />
            <FlavourTypeButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="pasta"
            />
            <FlavourTypeButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="antipasti"
            />
            <FlavourTypeButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="insalate"
            />
            <FlavourTypeButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="meat"
            />
          </div>
          <FlavourSelect selected={selected.categoryTwo} type="dining" />
        </FlavourContainer>
      </div>
      <Footer />
    </div>
  );
};

export default UnanimatedMenu;
