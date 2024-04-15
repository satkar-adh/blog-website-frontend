import BodyComponent from "./body-components"

export default function Body(){
    return (
        <div className="body-component">
            <BodyComponent img="../images/design.png"
                            name="Design"
                            content="Create any website with flexible design tools and the power of blocks. Start with a blank canvas or choose a theme. Customize every detail—no code needed."
            />
            <BodyComponent img="../images/build.png"
                            name="Build"
                            content="See how your site will look in real time, even as you add, edit, and rearrange content—with intuitive editing and integrated features to manage it all."
            />
            <BodyComponent img="../images/extend.png"
                            name="Extend"
                            content="Make your site do whatever you need it to. Add a store, analytics, newsletter, social media integration; you’re in control with an extensive library of plugins."
            />
        </div>
    )
}