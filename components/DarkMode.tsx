'use client'
import { changeMode } from "@/store/features/darkMode"
import styles from "./darkMode.module.css"
import { useAppSelector } from '@/store/store'
import { useAppDispatch } from "@/store/store"

const DarkMode = () => {
    const darkMode = useAppSelector(state => state.darkMode.darkMode)
    const dispatch = useAppDispatch()
    console.log(darkMode)
    const hadleChangeMode = () => {
        dispatch(changeMode(!darkMode))
    }

    return (
        <div className={styles.mainDarkmode}>
            <button onClick={hadleChangeMode}>Change mode</button>
        </div>
    )
}

export default DarkMode