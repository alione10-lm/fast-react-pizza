import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex justify-between border-b border-slate-200 bg-blue-100 p-5 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast react pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
