import Image from "next/image";
import { ServicesDetails as ServicesDetailsProps } from "@/lib/types";
import Typography from "@/components/general/typography";
import Card from "@/components/layout/card";

const ServicesDetails = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: ServicesDetailsProps) => {
  return (
    <Card className="lg:w-1/1 mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12">
      <Image
        src={personAvatar!}
        alt={`${personName} avatar`}
        width={100}
        height={100}
      />
      <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900"
        >
          {personName}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
          {title}
        </Typography>
      </div>
      <Typography>{testimonial}</Typography>
    </Card>
  );
};

export default ServicesDetails;
