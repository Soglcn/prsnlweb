import { useEffect, useState } from "react";

function Counter({ target, duration = 1500, pause = 1500 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timeout;

        const animate = () => {
            let start = 0;
            const increment = target / (duration / 16);

            const interval = setInterval(() => {
                start += increment;

                if (start >= target) {
                    setCount(target);
                    clearInterval(interval);

                    timeout = setTimeout(() => {
                        setCount(0);
                        animate();
                    }, pause);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
        };

        animate();

        return () => clearTimeout(timeout);
    }, [target, duration, pause]);

    return count;
}

export default Counter;