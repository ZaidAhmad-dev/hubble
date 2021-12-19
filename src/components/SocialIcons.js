import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa';
import { StyledSocialIcons } from './SocialIcons.styled';

const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href="http://twitter.com">
                    <FaTwitter />
                </a>
                <a href="http://facebook.com">
                    <FaFacebook />
                </a>
                <a href="http://linkedin.com">
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    )
}
export default SocialIcons;
