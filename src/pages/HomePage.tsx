import MyNavBar from "../components/MyNavBar";
import OrizzontalCard from "../components/OrizzontalCard";
import SquaredCard from "../components/SquaredCard";
import VerticalCard from "../components/VerticalCard";
import { useRef } from "react";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import Links from "../components/Links";

export default function HomePage() {

    const { setCurrentSong, songs, artists, albums } = useAudioPlayerContext();
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!containerRef.current) return;
        const { clientWidth, scrollLeft } = containerRef.current;
        const scrollAmount = clientWidth * 0.8;
        containerRef.current.scrollTo({
            left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <>


            <section className="middle-big-box">

                <div className="big-mid custom-scrollbar">
                    <MyNavBar />

                    <div className="gradient">
                        <div className='orizzontal-cards-container'>
                            {songs.slice(0, 8).map((c) => (
                                <OrizzontalCard
                                    key={c.id}
                                    image={c.image}
                                    title={c.title}
                                    onClick={() => setCurrentSong(c)}
                                />
                            ))}
                        </div>
                    </div>

                    <section>
                        <div className="title-section">
                            <h2>Creato per: User</h2>
                        </div>

                        <div className="squared-cards-wrapper">
                            <button className="scroll-left" onClick={() => scroll("left")}>{"<"}</button>

                            <div className="squared-cards-container" ref={containerRef}>
                                {songs.map((c) => (
                                    <SquaredCard
                                        key={c.id}
                                        image={c.image}
                                        title={c.title}
                                        artistName={artists.find(a => a.id === c.artistId)?.name || "Unknown"}
                                        onClick={() => setCurrentSong(c)}
                                    />
                                ))}
                            </div>

                            <button className="scroll-right" onClick={() => scroll("right")}>{">"}</button>
                        </div>
                    </section>

                    <div className="vertical-cards-container">
                        {albums.map((a) => (
                            <VerticalCard key={a.id} image={a.image} title={a.title} />
                        ))}
                    </div>

                    <hr />
                    <Links />
                    <hr />


                </div>

            </section>

            
        </>
    )
}