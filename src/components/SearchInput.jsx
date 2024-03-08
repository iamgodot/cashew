import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Search } from "lucide-react"

const SearchInput = () => {
    return (
        <form className="flex items-center pt-3 pb-8 gap-2">
            <Input
                placeholder="Search for conversations"
                className="rounded-full "
            />
            <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="w-14 rounded-full hover:bg-gray-300"
            >
                <Search />
            </Button>
        </form>
    )
}

export default SearchInput
