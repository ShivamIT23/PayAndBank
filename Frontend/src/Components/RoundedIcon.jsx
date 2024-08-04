export default function RoundedIcon({symbol}) {
  return (
    <div className="rounded-full h-12 w-12 bg-slate-50 text-olaola font-bold flex justify-center mt-1 mr-2">
      <div className="flex flex-col justify-center h-full text-xl">
        {symbol}
      </div>
    </div>
  );
}
