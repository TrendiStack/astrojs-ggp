import { useRef } from 'react';
import { gelato, pizza, sorbet, soy } from '../../data';
import CardSection from './CardSection';
import Header from './Header';
import HeaderText from './HeaderText';
import LI from './LI';
import ScrollAlert from './ScrollAlert';
import UL from './UL';

const SmallMenuPage = ({ isMobile, isHovered, setIsHovered }) => {
  const headerRef = useRef(null);
  return (
    <>
      <div className={`relative ${isHovered && 'hideCursor'} mb-[85vh]`}>
        {!isMobile && (
          <ScrollAlert isHovered={isHovered} setIsHovered={setIsHovered} />
        )}

        <Header ref={headerRef} />
        <CardSection className="z-[100] bg-[#edae49] flex flex-col justify-between gap-10 py-14 w-full">
          <HeaderText type="h1" className="header-primary text-center">
            Gelato Menu
          </HeaderText>
          <div className="grid grid-cols-1 gap-10 ">
            <div>
              <HeaderText type="h2" className="large-text">
                Sorbet
              </HeaderText>
              <UL setIsHovered={setIsHovered}>
                {sorbet?.map(item => {
                  return <LI key={item.id}>{item?.name}</LI>;
                })}
              </UL>
            </div>
            <div>
              <HeaderText type="h2" className="large-text">
                Gelato
              </HeaderText>
              <UL setIsHovered={setIsHovered}>
                {gelato?.map(item => {
                  return <LI key={item.id}>{item?.name}</LI>;
                })}
              </UL>
            </div>
            <div>
              <HeaderText type="h2" className="large-text">
                Soy
              </HeaderText>
              <UL setIsHovered={setIsHovered}>
                {soy?.map(item => {
                  return <LI key={item.id}>{item?.name}</LI>;
                })}
              </UL>
            </div>
          </div>
          <p className="text-center">
            *SEASONAL FLAVOURS, MAY NOT BE AVAILABLE AT TIME OF DINING*
          </p>
        </CardSection>
        <CardSection className="z-[99] flex flex-col gap-10 justify-between py-14 bg-[#e5ba75] rounded-b-3xl">
          <HeaderText type="h1" className="header-primary text-center">
            Pizza Menu
          </HeaderText>
          <UL
            setIsHovered={setIsHovered}
            className="flex flex-col lg:text-center gap-y-3 "
          >
            {pizza?.map(item => {
              return <LI key={item.id}>{item?.name}</LI>;
            })}
          </UL>
          <p className="text-center">
            Gluten Free Pizza Available <br /> extra charges applicable, ask
            server for details.
          </p>
        </CardSection>
      </div>
    </>
  );
};

export default SmallMenuPage;
