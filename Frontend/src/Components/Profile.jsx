import RoundedIcon from "./RoundedIcon";

export default function Profile({user}) {
    
  return (
    <div className="relative bottom-4 left-1">
        <RoundedIcon symbol={user.firstName[0]} />
    </div>
  );
}
