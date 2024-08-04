import { useSetRecoilState } from "recoil";
import RoundedIcon from "../Components/RoundedIcon";
import { settingAtom } from "../Store/atom";

export default function UserSetting() {
  const setSetting = useSetRecoilState(settingAtom);

  return (
    <>
      <div className=" absolute top-0 z-40 bg-opacity-60 bg-cyan-900 h-full w-full"></div>
      <div className="absolute top-0 z-50 h-full w-full flex flex-wrap opacity-100 justify-center content-center">
        <button
          className="absolute right-5 top-2"
          onClick={() => setSetting(false)}
        >
          <RoundedIcon symbol={"❌"} />
        </button>
      </div>
    </>
  );
}
