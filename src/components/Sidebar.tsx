import type {ISidebar} from "../interfaces/ISidebar.ts";
import { FiCode, FiLock, FiUser} from "react-icons/fi";
import Button from "./Button.tsx";
import {BiCode} from "react-icons/bi";

export type SidebarMode = "default" | "admin" | "user";

const getSidebarItems = (mode: SidebarMode): ISidebar[] => {
    switch (mode) {
        case "admin":
            return [
                {label: "Dashboard", href: "#admin", icon: <FiLock/>},
                {label: "Manage Projects", href: "#skills", icon: <FiCode/>},
            ];
        case "user":
            return [
                {label: "Profile", href: "#profil", icon: <FiUser/>},
                {label: "My Skills", href: "#skills", icon: <BiCode/>},
            ];
        case "default":
        default:
            return [
                {label: "About Me", href: "#profil", icon: <FiUser/>},
                {label: "My Projects", href: "#skills", icon: <FiCode/>},
                {label: "Admin", href: "#admin", icon: <FiLock/>},
            ];
    }
};

const Sidebar = ({mode, isOpen, onClose}: { mode: SidebarMode; isOpen: boolean; onClose: () => void }) => {
    const items = getSidebarItems(mode);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition-opacity duration-300"
                     onClick={onClose}/>
            )}
            <div
                className={`fixed top-0 left-0 h-full w-64 z-50 bg-gray-800 text-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-lg font-bold">Menü</h2>
                    <Button
                        onClick={onClose}
                        className="bg-transparent hover:bg-transparent text-white text-xl p-0 m-0 shadow-none border-none focus:outline-none"
                        children={'x'}>
                    </Button>
                </div>
                <ul className="p-4 space-y-2">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition"
                                onClick={onClose}>
                                {item.icon && <span>{item.icon}</span>}
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;