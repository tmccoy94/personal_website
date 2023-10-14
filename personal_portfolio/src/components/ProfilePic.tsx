import { Avatar, Image } from "@chakra-ui/react"
import pic from "../assets/taylor_pic.jpg";


const ProfilePic = () => {
  return (
    <div>
        <Avatar size='2xl' src={pic} />
        <h1>Backend Developer, Data Lover, Guitarist</h1>
    </div>
  )
}

export default ProfilePic