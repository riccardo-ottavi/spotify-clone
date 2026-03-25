type Props = {
    image: string;
    title: string;
    onClick: () => void;
};


export default function OrizzontalCard({
    image,
    title,
    onClick
}: Props) {
    return (
        <div className='orizzontal-card' onClick={onClick}>
            <img src={image} alt="" />
            <span>{title}</span>
            <div className="play-hover-small">
                <img src="../play-solid-full.svg" alt="" />
            </div>
        </div>
    )
}