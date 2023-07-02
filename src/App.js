import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="b620fbb7-d2d0-4320-bb43-ef992fa3db75"
            userName="fazilmm860@gmail.com"
            userSecret="fazil.M1998"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    )
}

export default App;