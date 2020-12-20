import './TextSearch.css'

const TextSearch = () => (
  <form className="search">
    <fieldset>
      <legend className="is-vHidden">Text search</legend>
      <input className="search__input" type="text" placeholder="search" />
      <input className="search__submit" type="button" value="Reset"/>
    </fieldset>
  </form>
)

export default TextSearch;