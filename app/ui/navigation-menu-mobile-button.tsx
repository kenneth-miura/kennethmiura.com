import styles from './navigation-menu-mobile-button.module.scss';
import {clsx} from "clsx";

interface NavigationMenuMobileButtonProps {
    menuOpen: boolean;
    toggleMenuOpen: () => void;
}

export default function NavigationMenuMobileButton(props: NavigationMenuMobileButtonProps) {
    const {menuOpen, toggleMenuOpen} = props;


    return (
        <button className={styles.mobileHamburgerContainer} onClick={toggleMenuOpen}>
            <div className={clsx(styles.mobileHamburgerLineTop, {
                ['top-0 w-full']: !menuOpen,
                ['rotate-[225deg] top-2']: menuOpen
            })}/>
            <div className={clsx(styles.mobileHamburgerLineMiddle, {
                ['top-2 w-10/12']: !menuOpen,
                ['-rotate-45 w-full top-2']: menuOpen
            })}/>
            <div className={clsx(styles.mobileHamburgerLineBottom, {
                ['top-4 w-9/12']: !menuOpen,
                ['opacity-0 top-2']: menuOpen
            })}/>
        </button>
    )


}