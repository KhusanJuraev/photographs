
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'

const slides = [
    { id: 0, url: "slide1.jpg" },
    { id: 1, url: "slide2.jpg" },
    { id: 2, url: "slide3.jpg" },
];

export const BannerSlide = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    useEffect(() => void setInterval(() => set(state => (state + 1) % 3), 3000), []);
    return transitions.map(({ item, props, key }) => (
        <animated.div
            key={key}
            class="bg"
            style={{ ...props, backgroundImage: `url(${require("../img/" + item.url)})` }}
        />
    ))
};
