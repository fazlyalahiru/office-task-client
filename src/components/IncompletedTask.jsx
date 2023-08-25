import { BiSolidLayer, BiClipboard } from "react-icons/bi";
import { AiFillCloseCircle, AiOutlineComment, AiOutlinePaperClip } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { useState } from "react";
const IncompletedTask = ({ data }) => {
  const { clientName, assignedBy, taskDescription, assignedTo, date, comment } =
    data;

    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFiles([]);
  };

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleUpload = () => {
    setSelectedFiles([]);
    closeModal();
  };
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
        <div className="flex justify-center items-center py-2 gap-2 ">
          <p className="">
            <BiClipboard></BiClipboard>
          </p>
          <p>1/2</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div><img className="h-[25px] w-[25px] rounded-full" src={assignedTo} alt="" /></div>
        <div className="flex justify-center items-center gap-2">
          <AiOutlineComment></AiOutlineComment>
          {comment}
        </div>
        <div className="flex justify-center items-center cursor-pointer" onClick={openModal}>
          <AiOutlinePaperClip></AiOutlinePaperClip>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdDateRange></MdDateRange>
          {date}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <div className="flex justify-end">
              <AiFillCloseCircle onClick={closeModal} className="cursor-pointer" />
            </div>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
            />
            {selectedFiles.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold">Selected files:</p>
                <ul className="list-disc pl-6">
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncompletedTask;
