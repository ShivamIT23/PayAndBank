import { useEffect } from "react"
import Button from "./Button"
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import RoundedIcon from "./RoundedIcon";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterState, otherUsersState } from "../Store/atom";
import { getUsers } from "../../lib/helper";

export const Users = () => {


    const filter = useRecoilValue(filterState)
    const [otherUsers , setOtherUsers] = useRecoilState(otherUsersState);

    useEffect(()=>{
        async function asyncUseEffect() {
            setOtherUsers(await getUsers(filter));
        }
        asyncUseEffect();
    } ,[filter])

    console.log(otherUsers)

    return <>
        <div className="m-5 w-auto h-3/6 text-cyan-800">
        <Input placeholder={"Search for user"}/>
      </div>
        <div>
            {otherUsers.map(user => <User key={user.id} user={user} />)}
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
                navigate(`/send?id=${user.id}&name=${user.firstName + " " + user.lastName}`)
            } label={"Send Money"} />
        </div>
    </div>
}