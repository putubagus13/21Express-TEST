import Icon from '../assets/background.png';

function EmptyResults() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-[300px] h-[200px] overflow-hidden'>
        <img src={Icon} alt="Icon" className='w-full h-full object-cover drop-shadow-md' />
      </div>
      <label className='text-xl text-primary font-semibold'><span className='text-4xl font-bold'>Ayo </span><span>periksa pesananmu sekarang</span></label>
    </div>
  );
}

export default EmptyResults;