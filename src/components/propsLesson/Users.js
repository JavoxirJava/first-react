import { Table } from "reactstrap";
import User from "./User";

function Users() {
    return (
        <div className="container">
            <Table bordered className="mt-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                   <User id="1" name="Javohir" username="Javohir" email="javohir@gmail.com"/>
                   <User id="1" name="Javohir" username="Javohir" email="javohir@gmail.com"/>
                   <User id="1" name="Javohir" username="Javohir" email="javohir@gmail.com"/>
                   <User id="1" name="Javohir" username="Javohir" email="javohir@gmail.com"/>
                   <User id="1" name="Javohir" username="Javohir" email="javohir@gmail.com"/>
                   <User id="1" name="Javohir" username="Javohir" email="javohir@gmail.com"/>
                   <User id="1" name="Javohir" username="Javohir" email="javohir@gmail.com"/>
                </tbody>
            </Table>
        </div>
    );
}

export default Users;