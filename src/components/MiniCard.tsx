type Props= {
  image: string;
};

export default function MiniCard({
  image,
}: Props){
    return(
        <div className="mini-card">
                <img src={image} alt="" />
        </div>
    )
}