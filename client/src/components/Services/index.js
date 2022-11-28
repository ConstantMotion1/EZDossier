import React from 'react';
import Icon1 from '../../images/computerbuild.JPG';
import Icon2 from '../../images/computerr.JPG';
import Icon3 from '../../images/computertype.JPG';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Build a portfolio</ServicesH2>
          <ServicesP>
            We help you create a beautiful portfolio.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Design your portfolio</ServicesH2>
          <ServicesP>
            Choose from our selection of beautiful layouts.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Show off</ServicesH2>
          <ServicesP>
            Show off your portfolio and get hired.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
