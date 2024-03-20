import { Input } from "./ui/input"

const SearchInput = () => {
    return (
        <div className="flex items-center p-3 gap-2">
            <Input
                placeholder="Find a conversation"
                className="rounded-full bg-gray-100"
            />
        </div>
    )
}

export default SearchInput
