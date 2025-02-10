import React from "react";

const AddToCalendarButton: React.FC = () => {
  const handleAddToCalendar = () => {
    const event = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Wedding Ceremony - Riya weds Narasimhan
DESCRIPTION:Join us for our special day! For more info visit https://riyawedssimha.netlify.app/
LOCATION: Balan Orchard, JP Nagar, BNG
DTSTART:20250305T133000Z
DTEND:20250306T090000Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([event], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding-invite.ics"; // File name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault(); // Prevent default link behavior
        handleAddToCalendar();
      }}
      className="text-pink-500 hover:underline hover:text-blue-800 transition-all duration-200 ease-in-out"
    >
      {/* 📅 */}
      Add to Calendar
    </a>
  );
};

export default AddToCalendarButton;
