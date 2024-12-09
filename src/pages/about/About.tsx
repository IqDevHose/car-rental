import i18n from "@/utils/i18n";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { number: "15+", text: t("Years of Experience") },
    { number: "500+", text: t("Cars Sold") },
    { number: "100%", text: t("Client Satisfaction") },
    { number: "24/7", text: t("Support Available") },
  ];

  const values = [
    {
      title: t("Excellence"),
      description: t(
        "We source only the finest luxury vehicles, ensuring every car meets our stringent quality standards."
      ),
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
      title: t("Integrity"),
      description: t(
        "Transparency and honesty are at the core of every transaction and customer interaction."
      ),
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
      title: t("Innovation"),
      description: t(
        "We embrace the latest automotive technologies and offer cutting-edge vehicles to our clients."
      ),
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
      position: t("CEO & Founder"),
      image: "https://picsum.photos/200",
    },
    {
      name: "Sarah Johnson",
      position: t("Sales Director"),
      image: "https://picsum.photos/200",
    },
    {
      name: "Michael Brown",
      position: t("Head of Service"),
      image: "https://picsum.photos/200",
    },
  ];

  return (
    <main className="overflow-hidden">
      <div className="bg-[url('/cars/porsche.jpeg')] bg-no-repeat bg-cover bg-center relative h-[400px] bg-black w-full">
        {/* Overlay for darkening */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">{t("About")}</h1>
          <p className="text-xl max-w-2xl text-center">
            {i18n.language === "ar"
              ? "تقديم سيارات فاخرة استثنائية وخدمة متميزة منذ عام 2019"
              : "Delivering exceptional luxury vehicles and outstanding service since 2019"}
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="padding-x max-width py-16">
        <div
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("Our Story")}</h2>
            <p>
              {i18n.language === "ar"
                ? `لاحظ مؤسسونا تحولا في الطريقة التي يستأجر بها الناس السيارات. من هذا التحول, ولدت شركة: الشرق الاوسط. تأسست على "الواردة", فكرة أن الناس يريدون ان يشعروا بالحرية عند استئجار سيارة`
                : `Our founders noticed a shift in the way people rent cars. From this shift, a company was born: Middle East. It was founded on "inbound," the notion that people want to feel free when renting a car.`}
            </p>
            {/* <p className="text-gray-600 mb-4">
              {t(
                "Founded in 2008, we've established ourselves as a leading luxury car dealership in the Czech Republic. Our journey began with a simple vision: to provide exceptional vehicles and unparalleled service to discerning clients."
              )}
            </p>
            <p className="text-gray-600 mb-4">
              {t(
                "Over the years, we've built strong relationships with premium manufacturers and developed a reputation for excellence in the luxury automotive market. Our commitment to quality and customer satisfaction has made us the preferred choice for luxury car enthusiasts."
              )}
            </p>
            <p className="text-gray-600">
              {t(
                "Today, we continue to expand our collection of premium vehicles while maintaining the personalized service that has been our hallmark since day one."
              )}
            </p> */}
          </div>
          <div className="relative h-[400px]">
            <img
              src="/cars/lamborghini.jpeg"
              alt={t("Our Showroom")}
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
                  {t(stat.number)}
                </h3>
                <p className="text-gray-600">{t(stat.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renting Services Section */}
      <section className="padding-x max-width py-16">
        <h2 className={`text-3xl font-bold mb-12 text-center`}>
          {i18n.language === "ar" ? "خدمات التأجير" : "Renting Services"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Car Rentals */}
          <div
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            className="bg-white p-6 shadow-md border border-gray-200 rounded-lg"
          >
            <div className="text-red-500 mb-4">
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
            </div>
            <h3 className="text-xl font-bold mb-2">
              {i18n.language === "ar"
                ? "تأجير السيارات للأفراد والشركات"
                : "Car Rentals for Individuals and Companies"}
            </h3>
            <p className="text-gray-600">
              {i18n.language === "ar"
                ? "استئجار السيارات مع أو بدون سائق للأشخاص داخل وخارج العراق، بما في ذلك الشركات المحلية والدولية."
                : "Rent cars with or without a driver for people inside and outside Iraq, catering to both local and international companies."}
            </p>
          </div>
          {/* Airport Services */}
          <div
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            className="bg-white p-6 shadow-md border border-gray-200 rounded-lg"
          >
            <div className="text-red-500 mb-4">
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
            </div>
            <h3 className="text-xl font-bold mb-2">
              {i18n.language === "ar" ? "خدمات المطار" : "Airport Services"}
            </h3>
            <p className="text-gray-600">
              {i18n.language === "ar"
                ? "تمتع بخدمة نقل آمنة وموثوقة مع خدماتنا في المطار. يمكنك استئجار سيارة فور وصولك مع أو بدون سائق، أو الاستفادة من خدمات النقل من وإلى المطار."
                : "Enjoy safe and reliable transportation with our airport services. Rent a car immediately upon arrival, with or without a driver, or take advantage of our transportation to and from the airport."}
            </p>
          </div>
          {/* Long-Term Leasing */}
          <div
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            className="bg-white p-6 shadow-md border border-gray-200 rounded-lg"
          >
            <div className="text-red-500 mb-4">
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
            </div>
            <h3 className="text-xl font-bold mb-2">
              {i18n.language === "ar"
                ? "الإيجار طويل الأمد للشركات"
                : "Long-Term Leasing for Companies"}
            </h3>
            <p className="text-gray-600">
              {i18n.language === "ar"
                ? "قلل التكاليف مع خيارات الإيجار طويل الأمد لدينا، وهو مثالي للشركات التي تسعى لحلول نقل مريحة وفعّالة من حيث التكلفة لموظفيها."
                : "Reduce costs with our long-term leasing options, ideal for companies seeking convenient and cost-effective transportation solutions for their employees."}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          className="padding-x max-width"
        >
          <h2
            className={`text-3xl font-bold mb-12 ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {i18n.language === "ar" ? "رؤيتنا" : "Our Vision"}
          </h2>

          <div
            className={`max-w-xl text-lg ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
          >
            <h1>
              {i18n.language === "ar"
                ? `تجاوز توقعات وتطلعات عملائنا من خلال إسعادهم وتحقيق الرضا الكامل في كل خطوة من رحلتهم معنا.`
                : `Exceeding the expectations and aspirations of our customers by
      making them happy and achieving complete satisfaction at every
      step of their journey with us.`}
            </h1>
          </div>

          {/* <h2 className="text-3xl font-bold text-center mb-12">
            {t("Our Leadership Team")}
          </h2> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded-lg text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={t(member.name)}
                    className="object-cover rounded-full bg-gray-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{t(member.name)}</h3>
                <p className="text-gray-600">{t(member.position)}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default About;
