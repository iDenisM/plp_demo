import './Newsletter.css'

const Newsletter = () => (
  <form className="newsletter">
    <fieldset>
      <legend className="is-vHidden">newsletter</legend>
      <div className="newsletter__info">Subscribe to our newsletter</div>
      <div className="newsletter__form">
        <input className="newsletter__email" type="email" name="email"/>
        <button className="newsletter__submit" type="submit">Sign up</button>
      </div>
    </fieldset>
  </form>
)

export default Newsletter;