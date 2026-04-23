const { useEffect, useRef, useState } = React;
const { motion } = window.Motion;

function BlurText({ text, className }) {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const words = text.split(' ');

    return (
        <p
            ref={ref}
            className={className}
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                rowGap: '0.1em'
            }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
                    animate={inView ? {
                        filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                        opacity: [0, 0.5, 1],
                        y: [50, -5, 0]
                    } : {}}
                    transition={{
                        duration: 0.7,
                        delay: (i * 100) / 1000,
                        times: [0, 0.5, 1],
                        ease: 'easeOut'
                    }}
                    style={{
                        display: 'inline-block',
                        marginRight: '0.28em'
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </p>
    );
}

window.BlurText = BlurText;
