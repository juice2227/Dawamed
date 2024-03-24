
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return(
        <section className='flex justify-center items-center'>
            
                <h1>OOPS!!! PAGE NOT FOUND</h1>
                <h1>Error 404</h1>
                <p>
                We’re sorry, the page you requested could not be found. Please go back to the homepage.
                </p>
                { <Link to="/"> 
                <button className='bg-blue-500  text-white font-bold py-2 px-4 rounded p-2 '>Home</button>
                 </Link> }
        </section>
    )
}
export default PageNotFound