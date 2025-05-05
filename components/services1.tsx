import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites tailored to your needs.",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    description: "Creating beautiful and fast mobile applications for iOS and Android.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces with great experiences.",
    icon: "🎨",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Our Services</h1>
        <p className="text-gray-600 mb-12">
          We offer a wide range of services to meet your digital needs.
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
