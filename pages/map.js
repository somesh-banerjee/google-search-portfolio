import { useContext } from "react";
import TitleDesc from "../components/TitleDesc";
import { MapContainer } from "../styles/Map.styled";
import { ThemeContext } from "./_app";

const Map = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <TitleDesc
        title="Somesh's Location"
        desc="Here mentioned location of Somesh."
      />
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5630603991!2d88.04953282513189!3d22.675752087592443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1660720655486!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0px", ...(darkMode && { filter: "invert(90%)" }) }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </div>
  );
};
export default Map;
