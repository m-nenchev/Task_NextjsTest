// Styled elements for the Card go here
import styled from "styled-components";
import { 
  SectionContainerCard,
  SectionBigHeadingCard, 
  SectionSubheadingCard,
   SectionParagraph_1,
   SectionParagraph_2,
   SectionParagraph_3,
   SectionTitleOneParagraph_,
  } from "../../components";

export const StyledContainerCard = styled(({ height, ...props }) => <SectionContainerCard {...props} />)`
  align-items: center;
`;

export const StyledTitle = styled((props) => <SectionBigHeadingCard {...props} />)`
  margin: 50px 0 0 0;
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const StyledDescriptionCard = styled((props) => <SectionSubheadingCard {...props} />)`
@media (max-width: 600px) {
  font-size: 0.84rem;
}
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
margin-bottom: 50px;
margin-right: 25px;
@media (max-width: 600px) {
  margin-right: 0;
}
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  display: inline-block;
  max-width: 33.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    max-width: 23.03rem;
    margin-bottom: 20px;
    margin-left: 94px;
  }
`;

export const StyledSectionParagraph = styled((props) => <SectionParagraph_1{...props} />)`

`;

export const StyledSectionTwoParagraph = styled((props) => <SectionParagraph_2 {...props} />)`
  
`;

export const StyledSectionThreeParagraph = styled((props) => <SectionParagraph_3 {...props} />)`
  
`;

export const StyledSectionContainerMiniCard = styled(({ ...props }) => <div {...props} />)`
background-image: url("/img/background.png");
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-position-x: 20%;
  background-repeat: no-repeat;
  background-size: 1011px;
  @media (max-width: 600px) {
    flex-direction: column;
    background-position: center top;
    background-size: 651px;
    background-position-x: 5%;
    height: auto;
  }
`;

export const StyledSectionWraperAllParagraph = styled(({ ...props }) => <div {...props} />)`

`;

export const StyledSectionWraperOneParagraph = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  width: 470px;
  background-color: #f9f9f9;
  margin:  22px 0 39px 0;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    border:2px solid Blue;
  }
}
@media (max-width: 1000px) {
  width: 430px;
}
@media (max-width: 600px) {
  width: 265px;
  margin-left: 105px;
}
`;

export const StyledSectionWraperTwoParagraph = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  background-color: #f5f5f5;
  margin:  22px 0 39px 0;
  padding: 10px;
  border-radius: 10px;
  width: 495px;
  &:hover {
    border:2px solid Blue;
  }
}
@media (max-width: 1000px) {
  width: 460px;
}
@media (max-width: 600px) {
  width: 295px;
  margin-left: 105px;
}
`;

export const StyledSectionWraperThreeParagraph = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  background-color: #f1f1f1;
  margin:  22px 0 39px 0;
  border-radius: 10px;
  padding: 10px;
  width: 520px;
  &:hover {
    border:2px solid Blue;
  }
}
@media (max-width: 1000px) {
  width: 490px;
}
@media (max-width: 600px) {
  width: 325px;
  margin-left: 105px;
}
`;

export const StyledSectionImgOneParagraph = styled(({ ...props }) => <div {...props} />)`
width: 70px;
padding-top: 45px;
margin: 0 40px 15px 40px;
@media (max-width: 600px) {
  width: 50px;
  padding-top: 20px;
  margin: 5px;
}
`;
export const StyledSectionTitleOneParagraph = styled(({ ...props }) => <div {...props} />)`
@media (max-width: 600px) {
  width: 50%;
  margin-left: 15px;
}
`;
export const StyledTitleOneParagraph = styled(({ ...props }) => <SectionTitleOneParagraph_ {...props} />)`

`;
