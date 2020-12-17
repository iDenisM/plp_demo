import './Newsletter.css'

const Newsletter = () => (
  <form>
    <fieldset>
      <legend>Subscribe to our newsletter</legend>
      <input type="text" name="email"/>
      <button type="submit">Sign up</button>
    </fieldset>
  </form>
)

export default Newsletter;