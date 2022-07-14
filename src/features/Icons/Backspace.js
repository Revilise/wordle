export default function Backspace({theme}) {
    const stroke = theme === "theme__light" ? "#414141" : "#F6F6F6";
    return (
        <svg width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9314 1H30.1053C31.7621 1 33.1053 2.34315 33.1053 4V18C33.1053 19.6569 31.7621 21 30.1053 21H10.9314C10.034 21 9.18365 20.5982 8.6138 19.9049L2.86019 12.9049C1.95031 11.7979 1.95032 10.2021 2.86019 9.09507L8.6138 2.09507C9.18365 1.40177 10.034 1 10.9314 1Z" stroke={stroke} strokeWidth="2"/>
            <path d="M18.7614 6.52539L28.6843 16.2203" stroke={stroke} strokeWidth="2"/>
            <path d="M28.6843 6.52539L18.7614 16.2203" stroke={stroke} strokeWidth="2"/>
        </svg>
    )
}