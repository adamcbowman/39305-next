import { useEffect, useState } from "react";

export default function Glances( props: any ){
    const { ip } = props;
    const [cpu, setCpu] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('api/cpuTemp?ip=' + ip)
                .then((res) => res.json())
                .then((data) => {
                    setCpu(data.temp);
                });
            }, 2000);
        return () => clearInterval(interval);
    }, [ip]);

    return (
        <>
            <a href={"http://" + ip + ":61208"}>
                {cpu}°C 
            </a>
        </>
    );
}