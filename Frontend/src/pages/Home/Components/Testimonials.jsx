import React from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Bonnie Green",
      role: "Developer at Random AI",
      feedback: "If you care for your time, I hands down would go with this.",
      title: "Very easy to integrate",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=50",
    },
    {
      name: "Roberta Casas",
      role: "Lead Designer at Random",
      feedback:
        "Designing with Figma components that can be easily translated to Tailwind CSS is a huge timesaver!",
      title: "Solid foundation for any project",
      image:
        "https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=50",
    },
    {
      name: "Jese Leos",
      role: "Software Engineer at Random",
      feedback:
        "Aesthetically, the well-designed components are beautiful and will undoubtedly level up your next application.",
      title: "Mindblowing workflow",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60",
    },
    {
      name: "Joseph McFall",
      role: "CTO at Random",
      feedback:
        "You have many examples that can be used to create a fast prototype for your team.",
      title: "Efficient Collaborating",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60",
    },
    {
      name: "Alice Johnson",
      role: "Product Manager at TechFlow",
      feedback:
        "The UI/UX design is seamless, making it an absolute pleasure to work with!",
      title: "User-friendly and intuitive",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60",
    },
    {
      name: "Michael Adams",
      role: "Freelance Developer",
      feedback:
        "I've used many similar products, but this stands out with its clean code and flexibility.",
      title: "Best solution for developers",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60",
    },
    {
      name: "Sophia Martinez",
      role: "Entrepreneur & Blogger",
      feedback:
        "Absolutely love the performance and efficiency. It has made my workflow so much better!",
      title: "Game changer for my business",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60",
    },
    {
      name: "David Kim",
      role: "Data Scientist at AI Labs",
      feedback:
        "The AI-powered features are impressive and have significantly improved our data processing.",
      title: "Revolutionary AI integration",
      image:
        "https://images.unsplash.com/photo-1603415526983-ccb7f3d62b43?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60",
    },
  ];  

  return (
    <section className="my-20 px-5 md:px-10">
      <h1 className="text-3xl text-center font-bold dark:text-white mb-10">
        What Our Users Say
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl transition transform hover:scale-105 hover:shadow-2xl"
          >
            <blockquote className="text-gray-600 dark:text-gray-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="font-light">{item.feedback}</p>
            </blockquote>
            <div className="flex items-center mt-6 space-x-3">
              <img
                className="w-12 h-12 rounded-full border-2 border-gray-300"
                src={item.image}
                alt={item.name}
              />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
