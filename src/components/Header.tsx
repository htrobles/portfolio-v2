import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <div className='absolute w-screen'>
      <div className='container mx-auto px-8'>
        <div className='mx-auto flex justify-between py-4'>
          <a href='/'>
            <span className='text-primary-500'>{'<hr />'}</span>
          </a>
          <HeaderNav />
        </div>
      </div>
    </div>
  );
}
