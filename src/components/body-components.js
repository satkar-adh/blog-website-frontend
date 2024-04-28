export default function BodyComponent(props){
    // {img: imagePath, name: name, content: Paragraph}
    return (
        <div>
            <h4>{props.title}</h4>
            <h6>{props.email}</h6>
            <h6>{props.description}</h6>
        </div>
    )
}