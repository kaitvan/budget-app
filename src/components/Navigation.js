import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ onHomeClick, onSettingsClick }) => {
  const homeHandler = () => {
    onHomeClick();
  };

  const settingsHandler = () => {
    onSettingsClick();
  };

  return (
    <nav>
      <FontAwesomeIcon icon={faHouse} className="icon" onClick={homeHandler} />
      <FontAwesomeIcon
        icon={faGear}
        className="icon"
        onClick={settingsHandler}
      />
      <FontAwesomeIcon icon={faUser} className="icon" />
    </nav>
  );
};

export default Navigation;
