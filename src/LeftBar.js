import './LeftBar.css'
import {FaRegMap,FaDesktop , FaRegCommentDots,FaRegSun,FaSignOutAlt} from 'react-icons/fa';

const LeftBar = () => {
    return ( 
        <div className='LeftBar'>
            <div className="Icon">
                <FaRegMap/>
            </div>
            <div className="homeImage">
                <div className="HomeIcon">
                    <FaDesktop/>
                </div>
                <div className="MessageIcon">
                    <FaRegCommentDots/>
                </div>
                <div className="SettingIcon">
                    <FaRegSun/>
                </div>
            </div>
            <div className="exitIcon">
                <FaSignOutAlt/>
            </div>

            
        </div>
     );
}
 
export default LeftBar;