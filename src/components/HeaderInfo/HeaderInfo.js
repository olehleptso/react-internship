import './HeaderInfo.css';
import Text from '../Text/Text';
import Button from '../Button/Button';

function HeaderInfo () {
    return (
        <div className="header-info" data-testid="HeaderInfo">
        <div className="header-info-content">
          <div className="header-info-wrapper">
            <Text text='We Design and develop' styles='title'/>
            <Text text='We are a new design studio based in USA. We have over
              20 years of combined experience, and know a thing or two
              about designing websites and mobile apps.' styles='gray'/>
            <Button text='contact us' styles='primary' href="#feedbacks"/>
          </div>
        </div>
      </div>
    );
}

export default HeaderInfo;