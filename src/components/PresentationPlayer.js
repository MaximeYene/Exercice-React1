import {user} from "../components/UserList"
import "../styles/UserList.css"

function Presentation() {
	const title="Liste des utilisateurs";
	return (
		<div>
			<h1>{title}</h1>
			<ul className="user-list">
				{user.map((e) => (<div>
					<li key={e.id} className="user-list-part">
						Nom : {e.Nom}<br></br> 
						Prenom : {e.Prenom}<br></br> 
						Age : {e.Age}<br></br> 
						Emploi : {e.Emploi}<br></br> 
						Hobby : {e.Hobby}<br></br> 
						Description : {e.Descritption}</li>
				</div>))}
			</ul>
		</div>
	)
}


export default Presentation