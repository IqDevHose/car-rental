const About = () => {
  const stats = [
    { number: "15+", text: "Years of Experience" },
    { number: "500+", text: "Cars Sold" },
    { number: "100%", text: "Client Satisfaction" },
    { number: "24/7", text: "Support Available" },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We source only the finest luxury vehicles, ensuring every car meets our stringent quality standards.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description:
        "Transparency and honesty are at the core of every transaction and customer interaction.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "We embrace the latest automotive technologies and offer cutting-edge vehicles to our clients.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "https://picsum.photos/200",
    },
    {
      name: "Sarah Johnson",
      position: "Sales Director",
      image: "https://picsum.photos/200",
    },
    {
      name: "Michael Brown",
      position: "Head of Service",
      image: "https://picsum.photos/200",
    },
  ];

  return (
    <main className="overflow-hidden">
      <div className="bg-[url('/cars/porsche.jpeg')] bg-no-repeat bg-cover bg-center relative h-[400px] bg-black w-full">
        {/* Overlay for darkening */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl text-center">
            Delivering exceptional luxury vehicles and outstanding service since
            2008
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="padding-x max-width py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2008, we've established ourselves as a leading luxury
              car dealership in the Czech Republic. Our journey began with a
              simple vision: to provide exceptional vehicles and unparalleled
              service to discerning clients.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've built strong relationships with premium
              manufacturers and developed a reputation for excellence in the
              luxury automotive market. Our commitment to quality and customer
              satisfaction has made us the preferred choice for luxury car
              enthusiasts.
            </p>
            <p className="text-gray-600">
              Today, we continue to expand our collection of premium vehicles
              while maintaining the personalized service that has been our
              hallmark since day one.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="/cars/lamborghini.jpeg"
              alt="Our Showroom"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="padding-x max-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-red-500 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="padding-x max-width py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md border border-gray-200 rounded-lg"
            >
              <div className="text-red-500 mb-4">
                <value.icon />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="padding-x max-width">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded-lg text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover rounded-full bg-gray-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
