import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import RoundedIcon from "./RoundedIcon";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterState, otherUsersState } from "../Store/atom";

export const Users = () => {


    // Replace with backend call
    const [users, setUsers] = useState([{
        firstName: "Shivam",
        lastName: "Gupta",
        _id: 1
    }]);

    const filter = useRecoilValue(filterState)
    const [otherUsers , setOtherUsers] = useRecoilState(otherUsersState);

    useEffect(()=>{
        axios.get(`${URL}/api/v1/user/bulk?filter=${filter}` ,{
            
        })
        .then(res => setOtherUsers(res.data.user))
    } ,[filter])

    return <>
        <div className="m-5 w-auto h-3/6 text-cyan-800">
        <Input placeholder={"Search for user"}/>
      </div>
        <div>
            {otherUsers.map(user => <User key={user._id} user={user} />)}
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