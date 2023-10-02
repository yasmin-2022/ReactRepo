import User from './User'
const About = () => {
  return (
    <div >
    <h1>This is About Page</h1>
      <User data={ "This is data"} location={'This is location'} />
    </div >
  )
}
export default About;