function Avatatar({ url, className }) {
  return (
    <img
      className={` w-8 rounded-full cursor-pointer transition duration-150 tranform hover:scale-110 ${className} `}
      loading="lazy"
      src={url}
      alt="profile picture"
    />
  );
}

export default Avatatar;
