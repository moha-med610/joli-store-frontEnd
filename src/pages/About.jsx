import Testimonials from "../components/Home/Testimonials";
import Footer from "../components/Home/Footer";

const About = () => {
  return (
    <>
    <section className="flex items-center justify-center bg-pink-50 min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-700 mb-6 mt-10">من نحن؟</h1>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-10">
          في <span className="font-semibold text-pink-600">JOLI COSMETICS</span>، إحنا بنؤمن إن كل ست تستحق الجمال
          الطبيعي والإشراقة اللي تعكس شخصيتها. منتجاتنا مصنوعة بعناية فائقة ومكونات طبيعية مدروسة بعناية عشان
          توفّر لكي أفضل تجربة للعناية بالبشرة بدون أي ضرر أو مواد كيميائية قاسية.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-600 mb-2 text-center">مهمتنا</h3>
            <p className="text-gray-600">
              نوفّر منتجات تجميل طبيعية وآمنة تساعد كل بنت وست إنها تحب نفسها أكتر وتحس بجمالها الحقيقي.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-600 mb-2 text-center">قيمنا</h3>
            <p className="text-gray-600">
              الشفافية، الجودة، والثقة. كل منتج بنصنعه وراه فريق بيهتم بالتفاصيل وبسلامة بشرتك.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-600 mb-2 text-center">رؤيتنا</h3>
            <p className="text-gray-600">
              نكون العلامة الأولى في قلوب البنات اللي بيدوروا على الجمال الطبيعي والرعاية الصادقة.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Testimonials />
    <Footer />
    </>
  );
};

export default About;
