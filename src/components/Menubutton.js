import menu from "../assets/menu.svg"

const Menubutton = ({isOpen,setIsOpen}) => {
    return (
        <>
        <button onClick={() => setIsOpen=(!isOpen)}>
            <img src={menu} alt="menu-button"/>
        </button>
        </>
    )
}

export default Menubutton
