import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AddPage() {
	const initialState = {
		email: "",
		title: "",
		description: "",
	};
	const [crud, setCrud] = useState(initialState);
	const navigate = useNavigate();



	function handleSubmit(event) {
		event.preventDefault();
		//if (!crud.companyName || !crud.email) return;
		async function postCrud() {
			event.preventDefault();

    		const res = await axios.post("http://localhost:3000/crud", crud)
									.then(() => console.log("Successfully added a new crud"))
									.catch(() => console.log("ERROR :: adding crud"));
			try{
    			setCrud([...crud, res.data.crud]);
			}
			catch{
				console.log("COULDNT SET STATUS")
			}

		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Create CRUD</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						required
						value={crud.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group">
					<label>Title</label>
					<textarea
						name="title"
						value={crud.title}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Description</label>
					<textarea
						name="description"
						row="10"
						value={crud.description}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddPage;
