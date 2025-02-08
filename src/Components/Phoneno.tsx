interface PhoneNoProps {
  phoneNo: string;
}

export default function PhoneNo({ phoneNo }: PhoneNoProps) {
  return (
    <a href={`tel:${phoneNo}`} className="text-blue-500 hover:underline">
      {" "}
      +91-{phoneNo}
    </a>
  );
}
