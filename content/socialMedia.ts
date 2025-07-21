import { SocialPlatform } from "@lib/types"
import { BsGithub, BsLinkedin } from "react-icons/bs"

const socialMedia: SocialPlatform[] = [
  {
    title: "LinkedIn",
    Icon: BsLinkedin,
    url: "/",
  },
  {
    title: "Github",
    Icon: BsGithub,
    url: "https://github.com/jaxoncoder",
  },
]

export default socialMedia
