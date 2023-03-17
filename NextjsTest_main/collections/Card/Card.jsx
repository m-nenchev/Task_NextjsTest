// The Card to be exported goes here
import Image from "next/image";

import {
    StyledTextContainer,
    StyledContainerCard,
    StyledSectionContainerMiniCard,
    StyledSectionWraperAllParagraph,
    StyledSectionWraperOneParagraph,
    StyledSectionWraperTwoParagraph,
    StyledSectionWraperThreeParagraph,
    StyledSectionTitleOneParagraph,
    StyledSectionImgOneParagraph,
    StyledTitleOneParagraph,
    StyledTitle,
    StyledSectionParagraph,
    StyledSectionTwoParagraph,
    StyledSectionThreeParagraph,
    StyledDescriptionCard,
    StyledImageContainer,
  } from "./elements";

  export const Card = ({ image,logo1,logo2,logo3,titleBrief, title, description, descriptions, ...props }) => {
    return (
      <StyledContainerCard {...props}>
        <StyledTitle>{title}</StyledTitle>
        <StyledTextContainer>
          <StyledDescriptionCard>{description}</StyledDescriptionCard>
        </StyledTextContainer>
        <StyledSectionContainerMiniCard>
          <StyledImageContainer>
            <Image objectFit='contain' layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />     
          </StyledImageContainer>
          <StyledSectionWraperAllParagraph>  
            <StyledSectionWraperOneParagraph>
              <StyledSectionImgOneParagraph>
                <Image objectFit='contain' layout="responsive" src={logo1.src} alt={logo1.alt} width={logo1.width} height={logo1.height} />
              </StyledSectionImgOneParagraph>
              <StyledSectionTitleOneParagraph>
                <StyledTitleOneParagraph>{titleBrief}</StyledTitleOneParagraph>
                <StyledSectionParagraph>
                  Complete <b>brief writing or 
                  simple guidance</b> on what to 
                  include, we ve got you covered
                </StyledSectionParagraph>
              </StyledSectionTitleOneParagraph>  
            </StyledSectionWraperOneParagraph>
            <StyledSectionWraperTwoParagraph>
              <StyledSectionImgOneParagraph>
                <Image objectFit='contain' layout="responsive" src={logo2.src} alt={logo1.alt} width={logo1.width} height={logo1.height} />
              </StyledSectionImgOneParagraph>
              <StyledSectionTitleOneParagraph>
                <StyledTitleOneParagraph>{titleBrief}</StyledTitleOneParagraph>
                <StyledSectionTwoParagraph>
                  In-depth agency search covering;  
                  <b> criteria matching,</b>door knocking  
                  and due-dilligence vetting.
                </StyledSectionTwoParagraph>
              </StyledSectionTitleOneParagraph>  
            </StyledSectionWraperTwoParagraph>
            <StyledSectionWraperThreeParagraph>
              <StyledSectionImgOneParagraph>
                <Image objectFit='contain' layout="responsive" src={logo3.src} alt={logo1.alt} width={logo1.width} height={logo1.height} />
              </StyledSectionImgOneParagraph>
              <StyledSectionTitleOneParagraph>
                <StyledTitleOneParagraph>{titleBrief}</StyledTitleOneParagraph>
              <StyledSectionThreeParagraph>
                Comprehensive pitch managemant,
                including cooms, diary managemant
                and pitch hosting.
              </StyledSectionThreeParagraph>
              </StyledSectionTitleOneParagraph>  
            </StyledSectionWraperThreeParagraph>
          </StyledSectionWraperAllParagraph>
        </StyledSectionContainerMiniCard>
      </StyledContainerCard>
    );
  };