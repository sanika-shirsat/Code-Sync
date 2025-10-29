import SplitterComponent from "@/components/SplitterComponent"
import ConnectionStatusPage from "@/components/connection/ConnectionStatusPage"
import Sidebar from "@/components/sidebar/Sidebar"
import WorkSpace from "@/components/workspace"
import { useAppContext } from "@/context/AppContext"
import { useSocket } from "@/context/SocketContext"
import useFullScreen from "@/hooks/useFullScreen"
import useUserActivity from "@/hooks/useUserActivity"
import { SocketEvent } from "@/types/socket"
import { USER_STATUS, User } from "@/types/user"
import { useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

function EditorPage() {
    // User activity and fullscreen mode
    useUserActivity()
    useFullScreen()
    const navigate = useNavigate()
    const { roomId } = useParams()
    const { status, setCurrentUser, currentUser } = useAppContext()
    const { socket } = useSocket()
    const location = useLocation()

    useEffect(() => {
        if (currentUser.username.length > 0) return
        const username = location.state?.username
        if (!username) {
            navigate("/", { state: { roomId } })
        } else if (roomId) {
            const user: User = { username, roomId }
            setCurrentUser(user)
            socket.emit(SocketEvent.JOIN_REQUEST, user)
        }
    }, [currentUser.username, location.state?.username, navigate, roomId, setCurrentUser, socket])

    if (status === USER_STATUS.CONNECTION_FAILED) {
        return <ConnectionStatusPage />
    }

    return (
        <div className="flex h-screen bg-gray-800 text-white">
            <Sidebar className="w-1/4 bg-gray-900 p-4" />
            <WorkSpace className="w-3/4 bg-gray-700 p-4" />
        </div>
    )
}

export default EditorPage
