/* eslint-disable react/prop-types */

const Card = (props) => {
  return (
    <>
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex flex-col min-h-[150px]">
        <p className="text-gray-700 mb-4"> {props.label} </p>
      </div>
    </>
  );
};

export default Card;
