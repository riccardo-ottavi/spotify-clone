type Props= {
  image: string;
  id: number;
  name: string;
  type: "artist" | "album" | "playlist"
};

export default function MiniCard({
  image,
  id,
  type
}: Props){
    return(
        <div className="mini-card">
                <img src={image} alt="" style={type === "artist" ? {"borderRadius" : "33px"} :  {"borderRadius" : "0px"}}/>
        </div>
    )
}