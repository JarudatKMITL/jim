import Link from "next/link"
import { FaGithub, FaFacebook, FaYoutube, FaLine } from "react-icons/fa"

const socials = [
  { icon: <FaGithub />, path: "https://github.com/JarudatKMITL" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100009567887215" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@jc_dev410" },
  { icon: <FaLine />, path: "https://line.me/ti/p/gac1BG3G2r" },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_black" className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  )
}

export default Social