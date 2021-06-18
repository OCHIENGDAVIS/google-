function HeaderOption({ Icon, title, selected }) {
  return (
    <div className="flex text-gray-500 items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500">
      <Icon className="h-5" />
      <p className="hidden sm:flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
