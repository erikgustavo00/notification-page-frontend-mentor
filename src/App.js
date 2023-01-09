import './App.scss';
import Notification from './notifications/Notification.jsx';
import Notification_single from './notifications-sigle/Notication_single';


function App() {
  var img = '<img src="./images/avatar-angela-gray"/>'
  
  return (
    <div className="App">
      <div className='app-container'>
        <Notification>
          <Notification_single   name='mark webber' text='reacted to your recent post' post='My first tournament today!' time='1m ago'/>
         
          <Notification_single name='Angela Gray' text='followed you' time='5m ago'/>
        </Notification>
          
        
      </div>
    </div>
  );
}

export default App;
