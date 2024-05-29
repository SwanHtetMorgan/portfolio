import './index.scss';
import Sidebar from '../sidebar/sidebar';
import {Outlet} from 'react-router-dom';
import Terminal from '../terminal /terminal';
import Home from '../home/home';
export default function Layout() {
   return (
      <div className='App'>
         <Sidebar/>
         <div className="page">
         <Outlet/>
              <Terminal></Terminal>
          
            <span className='tags bottom-tags'>
               &lt;/body&gt;
               <br/>
               <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
         </div>
      </div>
   );
}
