import useIsNearTop from "@/app/hooks/useIsNearTop";
import useScrollDirection from "@/app/hooks/useScrollDirection";
import {clsx} from "clsx";
import styles from "./Header.module.scss";
import NavigationMenu from "@/app/ui/NavigationMenu";

interface HeaderProps {
    menuOpen: boolean;
    toggleMenuOpen: () => void;
}
export default function Header(props: HeaderProps) {
    const {menuOpen, toggleMenuOpen} = props;
    const isNearTop = useIsNearTop(50);
    const scrollDirection = useScrollDirection();

    return (
        <header className={clsx(styles.header, {
            [styles.headerScrollingDown]: !isNearTop && scrollDirection === 'down',
            [styles.headerScrollingUp]: !isNearTop && scrollDirection === 'up',
            [styles.headerAtTop]: isNearTop,

        })}>
            <NavigationMenu menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen}/>
        </header>
    )

}