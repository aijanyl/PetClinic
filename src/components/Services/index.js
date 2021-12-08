import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-5.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Dental Care</ServicesH2>
          <ServicesP>
            Dental cleanings are recommended to maintain your pet’s oral health.
            Our cleanings include scaling.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Veterinary online</ServicesH2>
          <ServicesP>
            24/7 online telemedicine gives you peace of mind that your best
            friend is getting the best possible care .
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>A new kind of vet</ServicesH2>
          <ServicesP>
            We're reimagining the veterinary experience, with a membership model
            that delivers exceptional care.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
