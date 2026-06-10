const Features = () => {
  const features = [
    {
      title: "Child-led learning",
      desc: "Every child at Divyataa directs their own work. They choose, they focus, they finish, building the habit of self-direction that most adults are still trying to develop.",
    },
    {
      title: "A prepared environment",
      desc: "Our classrooms are designed, not decorated. Every shelf, every material, every element of the room is there because it serves the child's development. Nothing is accidental.",
    },
    {
      title: "Trained Montessori guides",
      desc: "Our educators are trained to observe before they speak, to offer a lesson at the right moment, and then to step back. A great Montessori classroom hums without the teacher at its centre.",
    },
    {
      title: "Three hours of deep work",
      desc: "No bells. No forced transitions. Every morning, children at Divyataa have three uninterrupted hours to go deep into their chosen work. Concentration is not demanded here, it is grown.",
    },
  ];

  return (
    <section className="relative overflow-hidden">

      {/* OPTIONAL LIGHT BACKGROUND GLOW (STATIC) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-200 rounded-full blur-[120px]" />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10 px-6 py-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
            What makes Divyataa different
          </h2>

          <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
            We are not Montessori-inspired. We are pure Montessori, and that
            distinction matters more than any brochure can explain.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-slate-100
                rounded-[32px]
                p-8
                text-center
                shadow-md
                min-h-[230px]
                transition-colors duration-300
                hover:bg-purple-600
              "
            >
              <h3 className="
                text-xl font-semibold mb-5
                text-[#1a1a1a]
                transition-colors duration-300
                group-hover:text-white
              ">
                {feature.title}
              </h3>

              <p className="
                text-slate-600 leading-relaxed
                transition-colors duration-300
                hover:text-purple-100
              ">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;