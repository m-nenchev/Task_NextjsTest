import { forwardRef } from "react";
import { StyledSectionSubheadingCard } from "./elements";

export const SectionSubheadingCard = forwardRef(({ ...props }, ref) => {
  return <StyledSectionSubheadingCard {...props} ref={ref} />;
});
