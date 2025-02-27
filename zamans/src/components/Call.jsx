import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Call = () => {
  return (
    <div className="flex flex- justify-between items-center w-full  ">
      <h1 className="font-arsenal text-2xl p-6">
        <FontAwesomeIcon icon={faPhone} className="mr-2" />
        07473 608236
      </h1>
      <img
        src="/24.jpg"
        className="w-1/12 md:w-1/16 h-auto object-cover"
      />
    </div>
  );
};

export default Call;
