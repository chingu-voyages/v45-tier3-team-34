import React from "react";

const Succsess = ({
  success,
}: {
  success: string;
}) => {
  return (
    <>
      {success && (
        <p className="fixed  flex items-center justify-center p-5 bg-primary shadow-md left-2 top-[80%] transform  text-center text-white font-bold w-[250px] h-[100px] rounded-[9px] text-[1rem] animate-slide-in">
          {success}
        </p>
      )}
    </>
  );
};

export default Succsess;
