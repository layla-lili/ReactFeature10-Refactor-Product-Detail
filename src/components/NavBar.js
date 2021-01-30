// Styling
import { ThemeButton,Logo,NavProduct } from "../styles";


const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <h4 className="navbar-brand">
        <Logo to="/">
          <img src="https://media.discordapp.net/attachments/797449550616068106/804257167925706762/light-logo.png?width=1440&height=573" alt="Logo"/>
        </Logo>
      
      </h4>
      <div className="navbar-nav ml-auto">
      <NavProduct className="nav-item nav-link" to="/products">
            Products
          </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
