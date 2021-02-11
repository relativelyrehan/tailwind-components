const Avatar = ({ size, className, ...restOfAttributes }) => {
  return (
    <img
      className={`rounded-full w-${size} h-${size} object-cover ${className} cursor-pointer`}
      {...restOfAttributes}
      alt="avatar"
    />
  );
};

export default Avatar;
