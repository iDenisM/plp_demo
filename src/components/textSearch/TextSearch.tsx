import './TextSearch.css'
import { useDispatch } from 'react-redux';
import { textSearchKeyDown } from '../../actions'

const TextSearch = () => {
  const dispatchKeyDown = useDispatch();

  return (
    <form className="search">
      <fieldset>
        <legend className="is-vHidden">Text search</legend>
        <input onKeyUp={e => dispatchKeyDown(textSearchKeyDown(e.currentTarget.value))} className="search__input" type="text" placeholder="search" />
        <input className="search__submit" type="button" value="Reset"/>
      </fieldset>
    </form>
  )
}

export default TextSearch;