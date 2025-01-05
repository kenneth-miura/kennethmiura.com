import Image from "next/image";
import styles from './ProfileImage.module.scss';

interface ProfileImageProps {
    imagePath: string;
}

export default function ProfileImage(props: ProfileImageProps) {
    // TODO: https://nextjs.org/learn-pages-router/basics/assets-metadata-css/assets
    const {imagePath} = props;
    const imageDims = 400;
    return (
        <div className={styles.container}>
            <Image  className={styles.profileImage} src={imagePath} alt={"Profile picture"} width={imageDims} height={imageDims}/>
        </div>
    )
}