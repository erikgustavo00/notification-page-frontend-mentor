import React from 'react';
import './Notification.scss';
import Users from '../../Users'
import { useState } from 'react'

function Notification(props){
  const [users,setUsers] = useState(Users)

function setAllUnread(){
  setUsers((prev) => prev.map(user => ({...user, isUnread: false })))
}

function hadleNotificationClick(id){
  setUsers((prev)=> prev.map(user => (user.id === id ? {...user, isUnread:false }: user)))
}

  function getUser(){
 
    return (users && users.map((user)=>(
     
     
        <div key={user.id}>  

      <button type='button'   onClick={()=>hadleNotificationClick(user.id)} className={user.isUnread  && 'button--activated'}>
           
           <div className='notification_single'>
           <div className="img">
            <a href="#">
             <img src={user.author.img} alt="avatar" />
             </a>
           </div>
           <div className="notify-content">
             <div className="text">
               <span className="name">
                 <a href={user.author.href}>{user.author.name}</a>
               </span>
               <span className="text">{user.text}</span>
               <span className="group">
               {user.link && (<a href={user.link.href}>{user.link.group}</a>)}
               </span>
               <span>{user.link && (<a href={user.link.href}>{user.link.post}</a>)}</span><span className={user.isUnread && 'redSignal'}></span>
             </div>{/* text*/}
             <span className="time">{user.time}</span>
             {user.link && <a href={user.link.href} className={user.chess}>{user.secondary_img}</a>}
             
             <div className={user.messageClass}>
               <p>{user.message}</p>
             </div>
           </div>
         </div>
         
       </button>
       
       </div>
       ))
     );}

  
  
return(   
    <div className='notification-body'>
      <h2>Notifications <span className='isUnreadLength'>{users.filter(user => user.isUnread).length}</span></h2>
      <button className='allUnread' onClick={()=>setAllUnread()}>Mark all as read</button>
      <div className="clear"></div>
      <div>{getUser()}</div>
      
    </div>
  )
}

export default Notification;