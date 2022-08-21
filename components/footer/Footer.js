import { useContext } from "react";
import { ThemeContext } from "../../pages/_app";
import { FooterContainer, SocialLinks } from "./Footer.styled";
import { footerData } from "../../constants/constants";

const Footer = () => {
  const { darkMode, handleThemeMode } = useContext(ThemeContext);

  return (
    <FooterContainer darkMode={darkMode}>
      <p>
        Page developed by &nbsp;<a href="https://www.linkedin.com/in/jayesh-choudhary-72444518b/">Jayesh</a>
      </p>
      <span onClick={handleThemeMode}>
        {footerData.darkTheme}
        {darkMode ? "on" : "off"}
      </span>
      <SocialLinks darkMode={darkMode}>
        {footerData.socialLinks.map(({ href, icon: Icon }) => {
          return (
            <a key={Icon} href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={22} />
            </a>
          );
        })}
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
