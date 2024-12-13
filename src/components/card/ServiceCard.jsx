import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({service}) => {
    const {title, img,description,price, _id} = service || {};
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <Image height={120} width={430} src={img} alt={title}/>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between items-center">
            <h6 className="text-primary font-semibold">Price: ${price}</h6>
            <Link href={`/services/${_id}`}><button className="btn btn-primary">View More</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
