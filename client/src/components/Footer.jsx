import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        
        <div>
            <footer className="bg-gray-900 text-green-400 py-4 ">
                <p>&copy; {currentYear} DawaMed</p>
                <div className='justify-content-space between hover:text-gray-300 flex justify-evenly'>
                    <FacebookIcon/>
                    <XIcon />
                    <EmailIcon />
                    <PhoneIcon/>
                    
                </div>
            </footer>


        </div>
    )


}
export default Footer;