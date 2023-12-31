const Error = ({ error }: { error: string }) => {
  return (
    <>
      {error && (
        <p className="fixed bg-destructive  flex items-center justify-center text-center shadow-md left-2 top-[80%] transform  text-white w-[250px] h-[100px] rounded-[9px] text-[1.2rem] animate-slide-in">
          {error}
        </p>
      )}
    </>
  );
};

export default Error;
