import { CorporateFooter } from "../corporate-footer/corporate-footer.component";
import { SocialsFooter } from "../socials-footer/socials-footer.component";
import "./footer.styles.scss";

export const Footer = () => {
  return(

<div className="footer">
    <CorporateFooter />
    <SocialsFooter />
</div>

  ) 
};
