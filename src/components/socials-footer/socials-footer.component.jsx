import "./socials-footer.styles.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const logoStyle = {
  width: "20px",
  margin: "0 3px"
}

export const SocialsFooter = () => {
  return <div className="socials-footer">
    <div className="final">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error, similique.</div>
    <div className="logos">
      <FacebookIcon style={logoStyle} />
      <TwitterIcon style={logoStyle}/>
      <InstagramIcon style={logoStyle}/>
      <YouTubeIcon style={logoStyle} />
    </div>
    </div>;
};
