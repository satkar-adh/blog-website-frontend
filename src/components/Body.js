// import BodyComponent from "./body-components"
// import data from "./data"
// import {Crudadd , Crudedit, Cruddelete} from '../crudPages/crud'
// import { Link } from 'react-router-dom';

// export default function Body(){
//     return (
//         <div>
//             <div className="body-component">
//                 {data.map((item, index) => (
//                     <BodyComponent key={index} email={item.email} title={item.title} description={item.description} />
//                 ))}
//             </div>
//             <div className="options">
//                 <Link to="/add">Add Item</Link>
//                 <Link to="/edit">Edit Item</Link>
//                 <Link to="/delete">Delete Item</Link>
//                 {/* <button onClick={Crudadd}>Add Post</button>
//                 <button onClick={Crudedit}>Edit Post</button>
//                 <button onClick={Cruddelete}>Delete Post</button> */}
//             </div>
//         </div>
//     )
// }