import { Button } from "reactstrap";


function User(props) {

    // const {id, name, username, gmail} = props;

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td><Button color="warning">Edit</Button></td>
            <td><Button color="danger">Delete</Button></td>
        </tr>
    );
}

export default User;