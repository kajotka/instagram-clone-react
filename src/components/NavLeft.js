import NavLeftItem from './NavLeftItem';
import homeSvg from '../svg/home.svg';
import createSvg from '../svg/create.svg';
import exploreSvg from '../svg/explore.svg';
import messagesSvg from '../svg/messages.svg';
import notificationsSvg from '../svg/notifications.svg';
import reelsSvg from '../svg/reels.svg';
import searchSvg from '../svg/search.svg';
import moreSvg from '../svg/more.svg';
import instagram from '../svg/instagram.svg';


const NavLeft = () => {
  return (
    <div className="nav-left">
      <div className="logo-instagram">
        {<img src={instagram} alt="" style={{width: 100}} />}
      </div>
      <div className="menu">
        <NavLeftItem svg ={homeSvg} name="Strona główna" elementStyle={{fontWeight: 700}} />
        <NavLeftItem svg ={searchSvg} name="Szukaj"/>
        <NavLeftItem svg ={exploreSvg} name="Eksploruj"/>
        <NavLeftItem svg ={reelsSvg} name="Rolki"/>
        <NavLeftItem svg ={messagesSvg} name="Wiadomości"/>
        <NavLeftItem svg ={notificationsSvg} name="Powiadomienia"/>
        <NavLeftItem svg ={createSvg} name="Utwórz"/>
        <NavLeftItem svg ='img/avatar9.jpg' name="Profil" classes="avatar" />
      </div>
      <div className="nav-end">
      <NavLeftItem svg ={moreSvg} name="Więcej"/>
      </div>
    </div>
  );
};

export default NavLeft;
