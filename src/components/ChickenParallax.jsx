import "./ChickenParallax.css"
import fence from "../assets/fence.png"
import grass from "../assets/grass.png"
import coop from "../assets/coop.png"
import chicken from "../assets/chicken.png"
import leafL from "../assets/leafL.png"
import leafR from "../assets/leafR.png"
import { useEffect, useState } from "react"

function ChickenParallax() {
    const [offsetY, setOffstY] = useState(0)

    const handleScroll = () => {
        setOffstY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav style={{ transform: `translateY(${offsetY * 1}px)`}}>
                <h2>Logo</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div id="parallaxContainer">
                <img src={fence} className="parallaxLayer" style={{ transform: `translateX(${offsetY * -0.2}px)`}}/>
                <h1>Chicken Parallax</h1>
                <img src={grass} className="parallaxLayer" style={{ transform: `translateY(${offsetY * -0.2}px)`}}/>
                <img src={coop} className="parallaxLayer" style={{ transform: `translateX(${offsetY * 0.2}px)`}}/>
                <img src={chicken} className="parallaxLayer"style={{ transform: `translateY(${offsetY * 1}px)`}}/>
                <img src={leafL} className="parallaxLayer" style={{ transform: `translateY(${offsetY * -0.2}px)`}}/>
                <img src={leafR} className="parallaxLayer" style={{ transform: `translateY(${offsetY * -0.2}px)`}}/>
            </div>
        </header>
    )
}

export default ChickenParallax