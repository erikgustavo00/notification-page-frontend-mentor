import './notification-single.scss';



function Notification_single(props){

    
    return(
        <div className='notification_single'>
            
            <div className='img'>{props.Img}</div> 
            <div className='notify-content'>
                <h5>{props.name}</h5><p>{props.text}</p> <h6>{props.post}</h6>
                <span>{props.time}</span>
                <div><p>{props.message}</p></div>
                <div>{props.secondary_img}</div>
            </div>
        </div>

    )

}


export default Notification_single;