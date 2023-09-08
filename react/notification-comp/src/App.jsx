import { useState } from 'react'
import './App.css'
import Notification from "./component/Notification.jsx";
import RefreshColor from "./component/RefreshColor.jsx";

function App() {
    const [notifications, setNotifications] = useState([])
    const handleDelete = (id) => {
        setNotifications(notifications.filter(it => it.id !== id))
    }

    const createNotification = () => {
        setNotifications([
            ...notifications,
            {id: 1, color: 'info'}
        ])
    }

  return (
    <>
        <button onClick={createNotification}>info</button>
        {
            notifications.map(it => {
                return (
                    <Notification key={it.id} color={it.color} onDelete={() => handleDelete(it.id)}>
                        hahhaha
                    </Notification>
                )
            })
        }
        <hr/>
        <RefreshColor />
    </>
  )
}

export default App
