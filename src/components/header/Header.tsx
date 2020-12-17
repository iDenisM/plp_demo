import './Header.css'
import Menu from '../menu/Menu';
import TextSearch from '../textSearch/TextSearch'

const Header = () => (
  <header className="App-header">
    <div>
      <img src="https://via.placeholder.com/100x50" alt="main logo"/>
    </div>
    <Menu />
    <TextSearch />
  </header>
)

export default Header;