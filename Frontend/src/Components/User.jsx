import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import RoundedIcon from "./RoundedIcon";

export const Users = () => {


    // Replace with backend call
    const [users, setUsers] = useState([{
        firstName: "Shivam",
        lastName: "Gupta",
        _id: 1
    }]);
    const [filter , setFilter] = useState("")

    // useEffect(()=>{
    //     axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
    //     .then(res => setUsers(res.data.user))
    // } ,[filter])

    return <>
        <div className="m-5 w-auto h-3/6">
        <Input placeholder={"Search for user"} type={"text"} name={"filter"} />
      </div>
        <div>
            {users.map(user => <User key={user._id} user={user} />)}
        </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();
    return <div className="flex justify-between mx-5">
        <div className="flex">
            <RoundedIcon symbol={user.firstName[0]} />
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={()=>
                navigate(`/send?id=${user._id}&name=${user.firstName}`)
            } label={"Send Money"} />
        </div>
    </div>
}