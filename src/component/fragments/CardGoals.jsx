import Card from "../elements/card";

const CardGoals = () => {
  return (
    <>
      <div className="text-lg text-gray-02 mb-2">Title</div>
      <div className="mb-8 flex flex-col  md:flex-row  gap-6">
        <div className="w-full md:w-2/3">
          <Card label="" />
        </div>
        <div className="">
          <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
        </div>
      </div>
      {/* top content end */}
      {/* bottom content start */}
      <div className="text-lg text-gray-02 mb-2">Title</div>

      <div className="mb-8 flex flex-col md:flex-row gap-6">
        <div className="sm:w-1/3 md:w-full">
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
        </div>
        <div className="sm:w-1/3 md:w-full">
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
        </div>
        <div className="sm:w-1/3 md:w-full">
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardGoals;
