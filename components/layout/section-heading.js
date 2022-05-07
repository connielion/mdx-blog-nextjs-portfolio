import styled from "styled-components";
import widths from "../../styling/device-sizes";

const Heading = styled.h2`
  color: inherit;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Ubuntu", sans-serif;
  @media (min-width: ${widths.tab}) {
    font-size: 2.8rem;
  }
  @media (min-width: ${widths.desktop}) {
    font-size: 4rem;
  }
`;

const SectionHeading = ({ children }) => (
  <Heading className="animate__animated animate__bounce">{children}</Heading>
);
export default SectionHeading;
