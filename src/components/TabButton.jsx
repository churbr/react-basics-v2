export default function TabButton(props) {
    const handleClick = () => {
        console.log("Hello World!");
    }

    return <li>
        <button onClick={handleClick}>{props.children}</button>
    </li>
}