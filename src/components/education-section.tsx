import { useTheme } from "@heroui/use-theme";

export function EducationSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-16 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`} id="education"
    >
      <div className="container mx-auto px-4">
      <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ${
              theme === "light" ? "bg-gray-200" : "bg-gray-800"
            }`}
          >
            <h3 className="text-2xl font-semibold">
              Bachelor of Science in Computer Science & Engineering
            </h3>
            <p
              className={`mt-2 ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Independent University, Bangladesh, 2020 - 2025
            </p>
            <p className="mt-2">
              Graduated with honors, focusing on software development and web
              technologies.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ${
              theme === "light" ? "bg-gray-200" : "bg-gray-800"
            }`}
          >
            <h3 className="text-2xl font-semibold">
            Higher Secondary Certificate (HSC)
            </h3>
            <p
              className={`mt-2 ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Ghatail Cantonment Public School & College, 2017 - 2019
            </p>
            <p className="mt-2">
                Completed with a GPA of 5.00 out of 5.00.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
