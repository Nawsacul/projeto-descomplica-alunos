import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu"

const BasePage = () => {
    return (
        <>
            <Menu />

            <Outlet />
        </>
    )
}

export default BasePage;