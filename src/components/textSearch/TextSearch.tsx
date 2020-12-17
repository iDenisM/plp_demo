import './TextSearch.css'

const TextSearch = () => (
  <form>
    <fieldset>
      <legend>Text search</legend>
      <input type="text" placeholder="search" />
      <input type="button" value="Reset"/>
    </fieldset>
  </form>
)

export default TextSearch;