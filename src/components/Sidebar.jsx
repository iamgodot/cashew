import Conversations from "./Conversations"
import SearchInput from "./SearchInput"

const Sidebar = () => {
    return (
        <div className="border-r border-gray-300 p-2 flex flex-col h-full w-1/4 min-w-[200px]">
            <SearchInput />
            <Conversations />
        </div>
    )
}

export default Sidebar
