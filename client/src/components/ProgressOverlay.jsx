
import ProgressBar from './ProgressBar';

const ProgressBarOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <ProgressBar />
      </div>
    </div>
  );
};

export default ProgressBarOverlay;
