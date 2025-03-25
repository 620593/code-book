import React from "react";
import { Accordion } from "./Accordian";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I use CodeBook?",
      answer:
        "CodeBook offers a vast collection of high-quality eBooks across multiple genres. With instant access, secure payments, and seamless reading experience, it's your go-to platform for digital books.",
    },
    {
      id: 2,
      question: "Can I access my eBook on mobile?",
      answer:
        "Yes! All eBooks purchased from our store are compatible with mobile, tablet, and desktop devices. You can read them on any ePub or PDF reader of your choice.",
    },
    {
      id: 3,
      question: "How do I receive my purchased eBook?",
      answer:
        "Once your payment is successfully processed, we will send the eBook directly to your registered email as a downloadable link.",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit/debit cards, UPI, PayPal, and international payment options for a hassle-free checkout experience.",
    },
    {
      id: 5,
      question: "Do you offer refunds?",
      answer:
        "Due to the digital nature of our products, we do not offer refunds once an eBook has been delivered. However, if you face any issues, please contact our support team.",
    },
    {
      id: 6,
      question: "Can I redownload my eBook if I lose access?",
      answer:
        "Yes! You can re-download your purchased eBook from the link sent to your email. If the link expires, contact support for assistance.",
    },
    {
      id: 7,
      question: "Do you support international payments?",
      answer:
        "Yes! We accept international payments via credit/debit cards, PayPal, and other global payment gateways.",
    },
    {
      id: 8,
      question: "Can I share my purchased eBook with others?",
      answer:
        "No, each purchase is licensed for individual use only. Sharing or redistributing purchased eBooks is against our terms of service.",
    },
    {
      id: 9,
      question: "Do you offer any discounts or promotions?",
      answer:
        "Yes! We frequently offer discounts and promo codes. Subscribe to our newsletter to stay updated on the latest deals.",
    },
    {
      id: 10,
      question: "How can I contact support if I have an issue?",
      answer:
        "You can reach our customer support team via email or live chat on our website. We're available 24/7 to assist you.",
    },
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Question in mind?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
