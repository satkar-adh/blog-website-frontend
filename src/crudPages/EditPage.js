import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function EditPage(){
    const navigate = useNavigate();
    const [crud, setCrud] = useState(null);

    const handleEdit = (id) => {
        navigate(`/editElement/${id}`)
    }

    const goBack = () => {
        navigate('/')
    }

    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/crud/${id}`)
                                // .then(() => console.log("SUCCESSFULLY DELETED"))
                                // .catch(() => "ERROR : DURING DELETE")

        if (res){
            // filter out the deleted element
            const val = [...crud].filter((data) => {
                return data._id !== id
            })
            // set accordingly
            setCrud(val)
        }
    }

    useEffect(()=> {
        async function init(){
            const res = await axios.get("http://localhost:3000/crud")
            if (res){
                setCrud(res.data)
            }else{
                console.log("NO DATA")
            }
        }
        init()
    }, [])

    return (
        <div>
            <h1>Current Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {crud && crud.map(item => (
                        <tr key={item._id}> {/* Assume each item has a unique _id */}
                            <td>{item.email}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => handleEdit(item._id)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={goBack}>HOME</button>
        </div>
    );
}

export default EditPage;