import '../App.css';
import Sidebar from '../Components/Sidebar';
import '../Styles/belowHeader.css';
import { TuneOutlined } from '@mui/icons-material';
import '../Styles/Search.css'

const Search = () => {
    return(<div>
            <div className='belowHeader' > 
              <Sidebar/>
              <div className='Search' >
                <div className='filter' >
                    <TuneOutlined/>
                    <h2>FILTER</h2>
                </div>
                <hr/>
              </div>
            </div>
    </div>)
}

export default Search;