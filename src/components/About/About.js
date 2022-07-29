import PropTypes from 'prop-types';
import './About.css';
import Text from '../Text/Text';
import sign from '../../images/sign.png';

function About () {
    return (
    <div className="about-outer">
        <div className="about-inner">
            <Text styles='title' text='About Us'/>
            <Text styles="gray" text="Divide have don't man wherein air fourth. Own itself make have night won't make.
            A you under Seed appear which good give. Own give air without fowl moveth dry first
            heaven fruit, dominion she'd won't very all."/>
            <img src={sign} alt="Sign"/>
        </div>
    </div>
    )
}

export default About;
About.propTypes = {
    sign: PropTypes.string
};