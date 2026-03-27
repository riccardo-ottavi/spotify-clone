type Props= {
  image: string;
  id: number;
  name: string;
};

export default function MiniCard({
  image,
  id,
}: Props){
    return(
        <div className="mini-card">
                <img src={image} alt="" />
        </div>
    )
}