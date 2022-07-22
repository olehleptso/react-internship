import Header from '../Header/Header';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import './HeaderContainer.css';

function HeaderContainer () {
    return (
        <div className='container'>
            <Header/>
            <HeaderInfo/>
        </div>
    );
}

export default HeaderContainer;