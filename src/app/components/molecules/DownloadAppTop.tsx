import { BsPhone } from "react-icons/bs";
const DownloadAppTop = () => {
  return (
    <div className="w-full flex justify-between text-xs bg-gray-200 text-gray-600 py-1 px-4">
      <span className="inline-flex items-center gap-2 hover:underline cursor-pointer">
        <BsPhone className="inline" />
        Download Market-in App
      </span>
      <ul className="inline-flex gap-4 ">
        <li className="hover:underline cursor-pointer">Tentang Market-In</li>
        <li className="hover:underline cursor-pointer">Promo</li>
        <li className="hover:underline cursor-pointer">Customer Center</li>
      </ul>
    </div>
  );
};

export default DownloadAppTop;
