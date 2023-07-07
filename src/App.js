import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine
            height="100vh"
            projectID="b620fbb7-d2d0-4320-bb43-ef992fa3db75"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    )
}

export default App;