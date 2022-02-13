import {useEffect,useState} from 'react';
import './ListItems.css'
import {Avatar} from '@material-ui/core';

const ListItems = ({addNewChat}) => {

    const [seed,setSeed] = useState("");
    
    const createChat = () => {
        const personName = prompt('Enter Name');

        if(personName){
            //database stuff
        }

    };
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    return !addNewChat ?( 
        <div className="ListItems">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="NameAndText">
                <h2 className="nameTag">name surname</h2>
                <p className='messageTag'>message to send</p>
            </div>
        </div>    
     ):(
         <div onClick={createChat} className="ListItems">
            <h2>Add New Chat</h2>
         </div>
     );
}
 
export default ListItems
