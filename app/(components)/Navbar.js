import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-end">
        <Link href="/">
        <div className="p-2 hover:bg-slate-300 duration-300 cursor-pointer">Home</div>
        </Link>
        <Link href="/ReviewPage/new">
        <div className="p-2 hover:bg-slate-300 duration-300 cursor-pointer">Create Review</div>
        </Link>
    </nav>

  );
};

export default Navbar;
