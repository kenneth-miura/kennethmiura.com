import Image from "next/image";
import styles from './ProfileImage.module.scss';

interface ProfileImageProps {
    imagePath: string;
}

export default function ProfileImage(props: ProfileImageProps) {
    const {imagePath} = props;
    const imageDims = 300;
    return (
        <div className={styles.container}>
            <Image  className={styles.profileImage} src={imagePath} alt={"Profile picture"} width={imageDims} height={imageDims}/>
        </div>
    )
}