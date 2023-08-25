import { BiSolidLayer, BiClipboard } from "react-icons/bi";
import { AiOutlineComment, AiOutlinePaperClip } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
const IncompletedTask = ({ data }) => {
  const { clientName, assignedBy, taskDescription, assignedTo, date, comment } =
    data;
  return (
    <div className="bg-white my-2 p-4 rounded-sm">
      <div className="flex justify-between font-semibold">
        <div>{clientName}</div>
        <div>{assignedBy}</div>
      </div>
      <div className="flex justify-between py-4">
        <div className="flex justify-center items-center py-2 gap-2">
          <BiSolidLayer></BiSolidLayer>
          {taskDescription}
        </div>
        <div className="flex justify-center items-center py-2 gap-2">
          <BiClipboard></BiClipboard>
          <p>1/2</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>{assignedTo}</div>
        <div className="flex justify-center items-center gap-2">
          <AiOutlineComment></AiOutlineComment>
          {comment}
        </div>
        <div className="flex justify-center items-center">
        <AiOutlinePaperClip></AiOutlinePaperClip>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdDateRange></MdDateRange>
          {date}
        </div>
      </div>
    </div>
  );
};

export default IncompletedTask;
