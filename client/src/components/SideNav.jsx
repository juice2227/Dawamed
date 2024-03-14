import { useState } from "react";
import { motion } from "framer-motion";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import LocalHospitalSharpIcon from '@mui/icons-material/LocalHospitalSharp';

const SideNav = () => {
  const [isCallHovered, setIsCallHovered] = useState(false);
  const [isUploadHovered, setIsUploadHovered] = useState(false);
  const [isConsultationHovered, setIsConsultationHovered] = useState(false);
  const [isScrollHovered, setIsScrollHovered] = useState(false);

  return (
    <div className=" flex flex-col fixed bottom-4 right-0">
      <div className="flex-grow">
        <div
          className="flex items-center p-4 text-blue group"
          onMouseEnter={() => setIsCallHovered(true)}
          onMouseLeave={() => setIsCallHovered(false)}
        >
          <div className="rounded-full bg-green-500 w-10 h-10 flex items-center justify-center">
            <CallRoundedIcon />
          </div>
          <motion.span
            className={`ml-2 overflow-hidden ${isCallHovered ? '' : 'invisible'}`}
            style={{
              transform: isCallHovered ? "translateX(-100%)" : "translateX(0)",
              transition: "transform 0.2s"
            }}
          >
            Contact Us
          </motion.span>
        </div>

        <div
          className="flex items-center p-4 text-blue group"
          onMouseEnter={() => setIsConsultationHovered(true)}
          onMouseLeave={() => setIsConsultationHovered(false)}
        >
          <div className="rounded-full bg-green-500 w-10 h-10 flex items-center justify-center">
            <LocalHospitalSharpIcon />
          </div>
          <motion.span
            className={`ml-2 overflow-hidden ${isConsultationHovered ? '' : 'invisible'}`}
            style={{
              transform: isConsultationHovered ? "translateX(-100%)" : "translateX(0)",
              transition: "transform 0.2s"
            }}
          >
            Book Consultation
          </motion.span>
        </div>

        <div
          className="flex items-center p-4 text-blue group"
          onMouseEnter={() => setIsUploadHovered(true)}
          onMouseLeave={() => setIsUploadHovered(false)}
        >
          <div className="rounded-full bg-green-500 w-10 h-10 flex items-center justify-center">
            <FileUploadIcon />
          </div>
          <motion.span
            className={`ml-2 overflow-hidden ${isUploadHovered ? '' : 'invisible'}`}
            style={{
              transform: isUploadHovered ? "translateX(-100%)" : "translateX(0)",
              transition: "transform 0.2s"
            }}
          >
            Upload Prescription
          </motion.span>
        </div>

        <div
          className="flex items-center p-4 text-blue group"
          onMouseEnter={() => setIsScrollHovered(true)}
          onMouseLeave={() => setIsScrollHovered(false)}
        >
          <div className="rounded-full bg-green-500 w-10 h-10 flex items-center justify-center">
            <ArrowUpwardSharpIcon />
          </div>
          <motion.span
            className={`ml-2 overflow-hidden ${isScrollHovered ? '' : 'invisible'}`}
            style={{
              transform: isScrollHovered ? "translateX(-100%)" : "translateX(0)",
              transition: "transform 0.2s"
            }}
          >
            Scroll to top
          </motion.span>
        </div>

       
      </div>
    </div>
  );
};

export default SideNav;
