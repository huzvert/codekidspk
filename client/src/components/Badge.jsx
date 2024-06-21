const Badge = ({ count }) => {
  if (Number(count) == 0) return null;
  return (
    <div className="absolute top-[-5px] right-[-5px] bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
      {count}
    </div>
  );
};

export default Badge;
