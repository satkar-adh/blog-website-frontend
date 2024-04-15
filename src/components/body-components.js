export default function BodyComponent(props){
    // {img: imagePath, name: name, content: Paragraph}
    return (
        <div>
            <img src={props.img}></img>
            <h4>{props.name}</h4>
            <h6>{props.content}</h6>
        </div>
    )
}