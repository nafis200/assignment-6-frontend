import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const MealFaq = () => {
  return (
    <section className="p-8 bg-gray-100 w-full">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-4">
        Why Choose Our Meal Box?
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        Discover the reasons our meal box service stands out. We provide the best quality meals, customized to your taste and delivered fresh to your door.
      </p>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold text-gray-800">
            Why should I choose your meal box service?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            We provide a variety of delicious, freshly prepared meals made with the highest quality ingredients. Our meal boxes are personalized to cater to your dietary preferences, ensuring that every bite is satisfying and healthy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-semibold text-gray-800">
            How do you ensure the freshness of the meals?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            We use only fresh, locally sourced ingredients, and each meal is prepared on the same day it is delivered to ensure maximum freshness. Our packaging is designed to keep the meals fresh during delivery.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-semibold text-gray-800">
            Are your meal boxes customizable?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Yes! We offer a wide variety of meals that can be customized based on your dietary preferences, whether you’re vegetarian, vegan, gluten-free, or have other specific needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-semibold text-gray-800">
            Can I choose the number of meals I want in my box?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Absolutely! You can choose the number of meals you want based on your needs, whether you&#39;re looking for a single meal or a full week’s worth of meals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-semibold text-gray-800">
            Do you offer meal plans for specific diets?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Yes, we offer meal plans for various diets such as Keto, Paleo, and Mediterranean, as well as options for those with allergies or special dietary restrictions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default MealFaq;



