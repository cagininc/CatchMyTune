// import { Element } from "react-scroll";
import { faq } from "../constants/index";
import FaqItem from "../components/FaqItem";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section id="faq">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
            Let your music reveal its secrets.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
            Analyze and understand every beat with Catch My Tune, where every nuance tells a story.
            </p>
          </div>
        </div>

        {/* Orta çizgiyi kaldırdık ve sade bir görünüm için sınıf ve görselleri sadeleştirdik */}
        <div className="relative z-2 border-2">
          <div className="container flex gap-10 max-lg:block">
            <div className="absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center">
            </div>

            {/* Sıkça Sorulan Soruların sol sütunu */}
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            {/* Sıkça Sorulan Soruların sağ sütunu */}
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default Faq;
