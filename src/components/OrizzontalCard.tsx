type Props = {
  image: string;
  title: string;
};


export default function OrizzontalCard({
  image,
  title
}: Props){
    return(
        <div className='orizzontal-card'> 
                <img src={image} alt="" />
                <span>{title}</span>
              </div>
    )
}