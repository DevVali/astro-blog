import { useState } from "react";

export default function Greeting({ messages }) {
    const randomMessage = () =>
        messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting] = useState(randomMessage);

    return (
        <>
            <p onClick={() => setGreeting(randomMessage())}>
                {greeting}. I'm Vali.
            </p>
        </>
    );
}
