import './Newsletter.css'

const Newsletter = () => (
  <form>
    <fieldset>
      <legend>Subscribe to our newsletter</legend>
      <input type="email" name="email"/>
      <button type="submit">Sign up</button>
    </fieldset>
  </form>
)

export default Newsletter;