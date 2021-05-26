import React, {Component} from 'react'
import List1 from './List1'


function List (){
 
     const ps = [
         {
             id :1,
             name : "umesh",
             age : 21

         },
         {
            id :2,
            name : "lokesh",
            age : 22
         }
     ]   
     const plist = ps.map((p,index) => <List1 key = {index} p={p}></List1>)
        return (
            <div>
                {plist}
            </div>
            
        );
        
    }


export default List