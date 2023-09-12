import PropTypes from 'prop-types';
import IconBw from '../assets/background-bw.png';

function ErrorMessage({ errorMessage }) {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-[300px] h-[200px] overflow-hidden'>
        <img src={IconBw} alt="Icon" className='w-full h-full object-cover drop-shadow-md' />
      </div>
      <h1 className='text-xl text-gray-500 font-semibold'>{errorMessage}</h1>
    </div>
  );
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

export default ErrorMessage;
