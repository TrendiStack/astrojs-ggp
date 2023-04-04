import { gelato, pizza, sorbet, soy } from '../../data';
import { useEffect, useRef } from 'react';
import CardSection from './CardSection';
import Header from './Header';
import HeaderText from './HeaderText';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollAlert from './ScrollAlert';
import UL from './UL';
import LI from './LI';
gsap.registerPlugin(ScrollTrigger);

const LargeMenuPage = ({ isMobile, isHovered, setIsHovered }) => {
  const container = useRef(null);
  const headerRef = useRef(null);
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom+=1000',
          scrub: 1,
          pin: true,
        },
      })
      .fromTo(headerRef.current, { y: '0%' }, { y: '-100%' })
      .fromTo(sectionOne.current, { y: '0%' }, { y: '-100%' })
      .fromTo(sectionTwo.current, { y: '0%' }, { y: '-100%' })
      .fromTo(sectionThree.current, { y: '0%' }, { y: '-100%' });
  }, [sectionOne, sectionTwo, sectionThree, headerRef]);
  return (
    <>
      <div ref={container} className={`relative ${isHovered && 'hideCursor'}`}>
        {!isMobile && (
          <ScrollAlert isHovered={isHovered} setIsHovered={setIsHovered} />
        )}

        <Header ref={headerRef} />
        <CardSection
          ref={sectionOne}
          className="z-[100] bg-[#edae49] flex flex-col justify-between py-14 h-screen w-full rounded-b-[6rem]"
        >
          <HeaderText type="h1" className="text-8xl text-center">
            Gelato Menu
          </HeaderText>
          <div className="flex justify-between gap-10 ">
            <div>
              <HeaderText type="h2" className="text-8xl">
                Sorbet
              </HeaderText>
              <UL setIsHovered={setIsHovered}>
                {sorbet?.map(item => {
                  return <LI key={item.id}>{item?.name}</LI>;
                })}
              </UL>
            </div>
            <div>
              <HeaderText type="h2" className="text-8xl">
                Gelato
              </HeaderText>
              <UL setIsHovered={setIsHovered}>
                {gelato?.map(item => {
                  return <LI key={item.id}>{item?.name}</LI>;
                })}
              </UL>
            </div>
            <div>
              <HeaderText type="h2" className="text-8xl">
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
        <CardSection
          ref={sectionTwo}
          className="z-[99] flex flex-col justify-between text-center py-14 bg-[#e5ba75] "
        >
          <HeaderText type="h1" className="text-8xl text-center">
            Pizza Menu
          </HeaderText>
          <UL
            setIsHovered={setIsHovered}
            className="flex flex-col h-[80%] gap-y-3"
          >
            {pizza?.map(item => {
              return <LI key={item.id}>{item?.name}</LI>;
            })}
          </UL>
          <p>
            Gluten Free Pizza Available <br /> extra charges applicable, ask
            server for details.
          </p>
        </CardSection>
      </div>
    </>
  );
};

export default LargeMenuPage;
