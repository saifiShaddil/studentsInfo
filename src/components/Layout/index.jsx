import Header from './Header';
import Sidebar from './Sidebar';

export default function index({ children }) {
  return (
    <div className="flex bg-blue-100 w-100 min-h-screen">
        <Header />
        <Sidebar />
        { children }
    </div>
  )
}
