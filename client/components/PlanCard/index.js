import React from 'react'
import { hot } from 'react-hot-loader'
import {CheckIco, PlanItem, PlanDescription, PlanDescriptionContainer, PlanH1,PlanH3,PlanIco,PlanOptionsContainer } from '../PlanCard/CardElements'
import ptIco from "../../static/pt-ico.png";
import ffIco from "../../static/ff-ico.png";
import tgIco from "../../static/tg-ico.png";

const PlanCard = ({ h1, subtitle, planIco, descrip1, descrip2, descrip3, image}) => {
    return (
        <PlanItem> 
            <PlanH1>{ h1 }</PlanH1>
            <PlanH3>
              { subtitle }
            </PlanH3>
            <PlanOptionsContainer>
              <PlanIco image={image} src={planIco} />
              <PlanDescriptionContainer>
                <PlanDescription>
                  <CheckIco /> { descrip1 }
                </PlanDescription>
                <PlanDescription>
                  <CheckIco /> { descrip2 }
                </PlanDescription>
                <PlanDescription>
                  <CheckIco /> { descrip3 }
                </PlanDescription>
              </PlanDescriptionContainer>
            </PlanOptionsContainer>
          </PlanItem>
    )
}

export default hot(module)(PlanCard);