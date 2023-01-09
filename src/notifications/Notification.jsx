import './Notification.scss';
// import Notification_single from '../notifications-sigle/Notication_single'


function Notification(props){
  let notification = props.children
  return(   
    <div className='notification-body'>
      <h2>Notifications 3</h2>
      <p>Mark all as read</p>
      <div className="clear"></div>
      
      <div>{notification}</div>
    </div>
  )
}

export default Notification;