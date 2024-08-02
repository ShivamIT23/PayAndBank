import { Users } from "../Components/User"

export default function DashBoard() {

  return (
    <div className="text-white">
      <div className=" text-xl px-5 flex flex-wrap justify-between w-full">
        <p>User</p>
        <p className="font-semibold">Your Balance : ₹ <span className="font-extralight">6000</span></p>
      </div>
      <Users />
    </div>
  )
}
