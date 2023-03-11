import '../App.css';
import Sidebar from '../Components/Sidebar';
import Videos from '../Components/Videos';
import '../Styles/belowHeader.css';

const BelowHeader = () =>{
    return(<div>
            <div className='belowHeader' > 
              <Sidebar/>
              <Videos/>
            </div>
    </div>)
}

export default BelowHeader;