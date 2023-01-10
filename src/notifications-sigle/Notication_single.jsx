import "./notification-single.scss";
import useState from 'react';
function Notification_single(props) {
  return (
    <div className="notification_single">
      <div className="img">
        <img src={props.img} alt="avatar" />
      </div>
      <div className="notify-content">
        <div className="text">
          <span class="name">
            <a href="">{props.name}</a>
          </span>
          <span className="text">{props.text}</span>
          <span className="group">
            <a href="">{props.group}</a>
          </span>
          <span className="post">{props.post}</span>
         </div>{}{/* text*/}
        <span className="time">{props.time}</span>
        <div className={props.chess}>{props.secondary_img}</div>

        <div className={props.messageClass}>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Notification_single;
