
import ProgressBar from './ProgressBar';

const ProgressBarOverlay = () => {
  return (
    <div className="fixed top-30 w-full h-full flex flex-col bg-white bg-opacity-1 z-50">
      <div className="rounded-2xl bg-white mt-[1rem] ml-[1rem]">
        <ProgressBar />
      </div>
    </div>
  );
};

export default ProgressBarOverlay;
