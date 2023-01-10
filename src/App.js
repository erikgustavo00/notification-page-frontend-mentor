import './App.scss';
import Notification from './notifications/Notification.jsx';
import Notification_single from './notifications-sigle/Notication_single';
import Images from './images/Images';
import useState from 'react';

function App() {
  
  
  return (
    <div className="App">
      <div className='app-container'>
        <Notification>
        <button className='button--activated'>
          <Notification_single style={{background:'red'}} img={Images.mark} name='mark webber' text='reacted to your recent post' post='My first tournament today!' time='1m ago'/>
        </button>
        <button>
          <Notification_single img={Images.angela} name='Angela Gray' text='followed you' time='5m ago'/>
        </button>
          <button>
          <Notification_single img={Images.jacob} name='Jacob Thompson' text='has joined your group' group='Chess Club' time='1 day ago'/>
          </button>
          <button>
          <Notification_single img={Images.rizky}  name='Rizky Hasanuddin' text='sent you a private message' time=' 5 days ago' messageClass='message' message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
            I'm already having lots of fun and improving my game."/>
            </button>
          <button>
          <Notification_single img={Images.kimberly} name='Kimberly Smith' text='commented on your picture' chess='chess' time='1 week ago'/>
          </button>
          <button>
          <Notification_single img={Images.nathan} name='Nathan Peterson' text='reacted to your recent post' post='5 end-game strategies to increase your win rate' time='2 weeks ago'/>
          </button>
          <button>
          <Notification_single img={Images.anna} name='Anna Kim'  text='left the group' group='Chess Club' time='2 weeks ago'/>
          </button>
           
        </Notification>
          
        
      </div>
    </div>
  );
}

export default App;
