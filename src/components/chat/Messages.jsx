import Message from "./Message"

const Messages = () => {
    return (
        <div className="flex flex-col overflow-auto">
            <Message content="Hi!" timestamp="14:01" position="right" />
            <Message content="Hi there." timestamp="14:03" />
            <Message
                content="How's it going?"
                timestamp="14:03"
                position="right"
            />
            <Message content="Good, how about you?" timestamp="14:05" />
            <Message content="I heard u moved to Seattle?" timestamp="14:05" />
            <Message
                content="No, I'm still thinking about that..."
                timestamp="14:10"
                position="right"
            />
            <Message content="Cool, take your time." timestamp="14:33" />
        </div>
    )
}

export default Messages
