import {Fragment} from "react"
import "./terminal.scss"
import JavaSvg from "../../../src/assets/java.svg"
import Spring from "../../../src/assets/images/springI.svg"
import MySql from"../../../src/assets/images/mysql.svg" 
import Js from"../../../src/assets/images/js.svg" 
import Html from"../../../src/assets/images/html.svg" 
import Python from"../../../src/assets/images/python.svg" 
import Git from"../../../src/assets/images/git.svg" 

export default function Terminal() {
   var current_date = new Date().toLocaleDateString();

   return (
      <Fragment>
         <div className="terminal-card">
            <div className="terminal-header">
               <span className="terminal-button red"></span>
               <span className="terminal-button yellow"></span>
               <span className="terminal-button green"></span>
            </div>
            <div className="terminal-body">
               <pre>
                  $ {current_date}
               </pre>
               <pre>
               
                  $ whoami 
                  </pre>

               <pre>
                  $ Swan Htet Aung Phyo
               </pre>
               <pre>
                  $ Skills are .......
               </pre>

               <h1>Programmings Related</h1>
               <span>
                  <img src={JavaSvg}
                     alt="SVG Icon"
                     width="100"
                     height="100"/>
               </span>
               <span>
                  <img src={Spring}
                     alt="SVG Icon"
                     width="100"
                     height="100"/>
               </span>

               <span>
                  <img src={Python}
                     alt="SVG Icon"
                     width="100"
                     height="100"/>
               </span>
               <span>
                  <img src={Js}
                     alt="SVG Icon"
                     width="100"
                     height="100"/>
               </span>


               <span>
                  <img src={Html}
                     alt="SVG Icon"
                     width="100"
                     height="100"/>
               </span>
               <span>
                  <img src={Git}
                     alt="SVG Icon"
                     width="100"
                     height="100"/>
               </span>
               <h1>RDBMS</h1> 
               <span>
                  <img src={MySql}
                     alt="SVG Icon"
                     width="100"
                     height="100"/>
               </span> 
            </div>
         </div>
      </Fragment>
   )
}
