import React from "react";
import { hot } from "react-hot-loader";
import {
  CheckIco,
  PlanItem,
  PlanDescription,
  PlanDescriptionContainer,
  PlanH1,
  PlanH3,
  PlanIco,
  PlanOptionsContainer,
  PlanH1Container,
  PlanH3Container,
  PlanHeaderContiner,
  PlanH1Subtitle,
  PriceContainer,
  PriceH1,
  PriceSmall
} from "../PlanCard/CardElements";
import ptIco from "../../static/pt-ico.png";
import ffIco from "../../static/ff-ico.png";
import tgIco from "../../static/tg-ico.png";

const PlanCard = ({
  h1,
  subtitle,
  planIco,
  descrip1,
  descrip2,
  descrip3,
  image,
  dark,
  price,
  small
}) => {
  return (
    <PlanItem>
      <PlanHeaderContiner>
        <PlanH1Container dark={dark}>
          <PlanH1 dark={dark}>Plan</PlanH1>
          <PlanH1Subtitle dark={dark}>{h1}</PlanH1Subtitle>
        </PlanH1Container>
        <PlanH3Container dark={dark}>
          <PlanH3>{subtitle}</PlanH3>
        </PlanH3Container>
      </PlanHeaderContiner>
      <PlanOptionsContainer>
        <PlanDescriptionContainer>        
          <PlanDescription>
          <CheckIco />
            {descrip1}
          </PlanDescription>
          <PlanDescription>
            <CheckIco /> {descrip2}
          </PlanDescription>
          <PlanDescription>
            <CheckIco /> {descrip3}
          </PlanDescription>
        </PlanDescriptionContainer>        
      </PlanOptionsContainer>
      <PriceContainer dark={dark}>
          <PriceH1>{price}</PriceH1>
          <PriceSmall>{small}</PriceSmall>
        </PriceContainer>
    </PlanItem>
  );
};

export default hot(module)(PlanCard);
