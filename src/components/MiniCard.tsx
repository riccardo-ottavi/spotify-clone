import type { Song } from "../types/types";

type Props= {
  image: string;
  id: number;
  name: string;
  type: "artist" | "album" | "playlist";
  songs?: Song[]
};

export default function MiniCard({
  image,
  id,
  type,
  songs
}: Props){
    return(
        <div className="mini-card">
                <img src={image} alt="" style={type === "artist" ? {"borderRadius" : "33px"} :  {"borderRadius" : "0px"}}/>
        </div>
    )
}