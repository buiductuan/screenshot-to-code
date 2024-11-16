const Footer = () => {
  return (
    <footer className="flex justify-between border-t border-gray-200 pt-4 mb-6 px-4 sm:px-0">
      <div className="flex flex-col">
        <span className="text-xl mb-2">Screenshot to Code</span>
        <span className="text-xs">
          © {new Date().getFullYear()} TuanBuiDev, Inc. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
