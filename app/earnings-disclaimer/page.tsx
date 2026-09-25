import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/constants/export";

export const metadata: Metadata = {
  title: "Earnings Disclaimer — Profit Plus",
  description:
    "Read the Profit Plus earnings disclaimer, educational disclosures, trading risk notices, testimonial statements, and limitation of liability.",
  openGraph: {
    title: "Earnings Disclaimer — Profit Plus",
    description:
      "Read the Profit Plus earnings disclaimer, educational disclosures, trading risk notices, testimonial statements, and limitation of liability.",
  },
};

export default function EarningsDisclaimerPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section: Dark Forest Green with Upward Trend Arrow */}
      <section className="relative w-full bg-[#012615] pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[466px] flex flex-col justify-center">
        {/* Centered Main Title with display-p3 gradient */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1
            className="font-['Outfit'] font-extrabold text-3xl sm:text-5xl md:text-[54px] lg:text-[80px] tracking-tight leading-tight bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] inline-block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, color(display-p3 1 1 1) 0.16%, color(display-p3 0.6 0.6 0.6) 108.15%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Earnings Disclaimer
          </h1>

          {/* Regulatory Risk Subtitle in Hero */}
          <p className="max-w-4xl mx-auto mt-4 sm:mt-6 text-xs sm:text-sm md:text-[14.5px] text-emerald-100/90 leading-relaxed text-center font-['Manrope']">
            ProfitPlus provides software tools to assist with trade execution and management. Trading futures and other financial instruments involves significant risk and may not be suitable for every investor. You could potentially lose all or more than your initial investment. Always evaluate your financial situation, understand the risks involved, and seek independent financial advice if needed. ProfitPlus does not guarantee profits or eliminate the risk of loss. Past performance of any trading system or methodology is not necessarily indicative of future results. Only risk capital should be used for trading and only those with sufficient risk capital should consider trading.
          </p>
        </div>

        {/* Decorative Green Upward Trend Arrow from public/arrow.webp */}
        <div className="absolute bottom-0 left-0 pointer-events-none select-none z-10">
          <Image
            src={IMAGES.arrow}
            alt="Upward Trend Arrow"
            width={340}
            height={160}
            className="w-40 sm:w-56 md:w-72 lg:w-84 h-auto object-contain object-bottom-left"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Main Content Section on Pure White Background */}
      <section className="relative w-full bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          {/* Top Intro Paragraphs */}
          <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
            <p>
              This website is owned and operated by Profit Plus, LLC, a Company (&quot;Profit Plus&quot;).
            </p>
            <p>
              The following disclaimer, in conjunction with our Terms of Use and Privacy Policy, governs your usage of Profit Plus, inclusive of all content, resources, and services offered (hereafter referred to as the &quot;Website&quot;), whether you access it as a guest or a registered user.
            </p>
            <p>
              We kindly urge you to read this disclaimer thoroughly prior to commencing your use of the Website. By using the Website or by clicking to accept the Terms of Use when such an option is presented to you, you acknowledge and consent to abide by the terms outlined in this disclaimer. If you do not wish to agree to our Privacy Policy, please refrain from accessing or using the Website.
            </p>
          </div>

          {/* Section 1: For Educational And Informational Purposes Only */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              For Educational And Informational Purposes Only
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              The information found on this Website and any resources accessible for download are intended for educational and informational purposes only.
            </p>
          </div>

          {/* Section 2: Not Professional Advice */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Not Professional Advice
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                The content provided on this Website and within any downloadable resources is not intended to be, and should not be construed as, financial advice. Although the employees and/or owners of the Company are professionals and the content provided is regarded as accurate, nothing on this Website should be taken as an individualized recommendation or substitute for financial advice from a certified professional who is acquainted with the specific details of your unique situation.
              </p>
              <p>
                While we endeavor to provide accurate and updated information, the financial landscape is dynamic and rapidly evolving. Consequently, we cannot guarantee the accuracy, completeness, or timeliness of the information provided on this Website. It is your responsibility to verify any information before relying on it.
              </p>
              <p>
                Neither the Company nor any of its employees or owners shall be held liable or responsible for any errors or omissions on this Website or for any damages that may result from failing to seek competent advice from a professional who is relevant to your situation.
              </p>
            </div>
          </div>

          {/* Section 3: No Professional-Client Relationship */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              No Professional-Client Relationship
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              Your usage of this Website, which includes implementing any suggestions proposed herein or utilizing any resources accessible on this Website, does not establish a professional-client relationship between you and the Company or any of its professionals. The Company cannot consider you a client unless and until a formal agreement has been established, including fee structures and other arrangements. Consequently, you acknowledge and agree that your use of this Website does not create a professional-client relationship.
            </p>
          </div>

          {/* Section 4: User's Personal Responsibility */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              User&apos;s Personal Responsibility
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              By employing this Website, you assume personal responsibility for the outcomes of your actions. You consent to assume full responsibility for any harm or damage that may arise from your use, or non-use, of the information accessible on this Website or the resources available for download. You also agree to exercise judgment and conduct due diligence prior to taking any action or implementing any plan or policy advocated or recommended on this Website.
            </p>
          </div>

          {/* Section 5: No Guarantees */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              No Guarantees
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                You understand that the Company does not make any guarantees regarding the outcomes of any action, whether recommended on this Website or not. Our purpose is to offer educational and informational resources intended to aid users of this Website in achieving success in the market. Nevertheless, you acknowledge that your ultimate success or failure is contingent upon your own endeavors, your specific circumstances, and numerous other factors beyond the Company&apos;s control and contemplation.
              </p>
              <p>
                You also acknowledge that past results do not guarantee similar outcomes. Therefore, the results achieved by others—whether they are clients or customers of the Company—who employ the principles outlined on this Website do not guarantee that you, or any other individual, will achieve identical or comparable results.
              </p>
            </div>
          </div>

          {/* Section 6: Errors And Omissions */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Errors And Omissions
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              This World Wide Web site serves as a public resource of general information. Although we commit to reasonable efforts to ensure the accuracy of the information presented on this Website, we cannot assert that this Website is free of errors. You accept the possibility that the information contained on this Website may contain errors and consent to conduct due diligence to validate any information obtained from this Website or its accessible resources prior to taking any action. You explicitly agree not to depend solely on any information contained on this Website.
            </p>
          </div>

          {/* Section 7: Reviews */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Reviews
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                At times, we may discuss various products, services, or other resources, including reviews of products, services, and/or software applications. These reviews represent the genuine opinions of the author/account of circumstances offered in good faith. The products and services reviewed may be provided to the Company at no cost or a discounted price as an incentive for review.
              </p>
              <p>
                Regardless of any discounts or free incentives provided, our reviews will remain honest and comprehensive evaluations. Further, we may include references to discounts or promotional codes valid only for registered users of our Website. We will clearly disclose the presence of any discounts or incentives received in exchange for providing a review. If you desire additional information regarding discounts and incentives received, please send an email to Sales@profitplus.us, using the title of the reviewed product as the subject line. We will respond promptly and fully to disclose any incentives or discounts associated with the review.
              </p>
            </div>
          </div>

          {/* Section 8: Affiliate Links */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Affiliate Links
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                Periodically, the Company engages in affiliate marketing and may incorporate affiliate links on certain pages of our Website. This means that we may receive a commission if you click on or make purchases using these affiliate links. As a company policy, we only liaise/affiliate with products, services, coaches, consultants, and other experts whom we believe will deliver value to our customers and followers.
              </p>
              <p>
                An explicit notice will appear upon each link if an affiliate link is utilized. You recognise that it is your responsibility to evaluate whether any affiliate offers are suitable for you by conducting your due diligence. You should not solely rely on any recommendations, references, or information provided by the Company but should inspect and complete your own investigations regarding whether to purchase the affiliated product or service.
              </p>
            </div>
          </div>

          {/* Section 9: No Endorsements */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              No Endorsements
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              Occasionally, the Company may refer to other products, services, coaches, consultants, and/or experts. Such references are not intended as an endorsement or declaration that the information provided by these entities is completely accurate. We provide this information as a point of reference for users. It is your responsibility to conduct your own investigation and form your own conclusions regarding any such products, services, coaches, consultants, and/or experts.
            </p>
          </div>

          {/* Section 10: Testimonials */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Testimonials
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                Throughout this Website, you may encounter testimonials from clients and customers who have utilized the products and services offered on this Website or by the Company. These testimonials are genuine statements made by clients and/or customers and have been accurately represented on the Website.
              </p>
              <p>
                While these testimonials illustrate actual results achieved by these clients and/or customers, the outcomes experienced by them are not necessarily typical. You explicitly acknowledge and agree that these testimonials do not guarantee the results that you or any other client will attain through the utilization of any products or services provided on this Website or by the Company.
              </p>
            </div>
          </div>

          {/* Section 11: Earnings Disclaimer */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Earnings Disclaimer
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                Periodically, the Company may report on the success of one of its existing or previous clients/customers. The information regarding this success is conveyed accurately by the respective client/customer. You recognize that the success of others does not guarantee your own success.
              </p>
              <p>
                Just as with any business endeavor, your results may differ and will depend upon your personal capabilities, business acumen, expertise, and level of ambition. No guarantees can be made concerning the level of success you may attain. There is no assurance that you will generate any income whatsoever, and you assume the risk that the outcome and monetary achievements may differ for everyone. The success of each individual is affected by their diligence, motivation, dedication, and other variables.
              </p>
              <p>
                The use of our information, products, and services should be based on your own due diligence, and you acknowledge that the Company is not liable for any success or failure in your business that is directly or indirectly connected to the acquisition and use of our information, products, and services that have been reviewed or advertised on this Website.
              </p>
            </div>
          </div>

          {/* Section 12: No Warranties */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              No Warranties
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              The Company does not provide warranties concerning the performance or operation of this Website. The Company further makes no representations or warranties of any kind, whether expressed or implied, regarding the information, content, materials, documents, programs, products, books, or services offered on or through this Website. To the fullest extent permitted by applicable law, the Company disclaims all warranties, whether expressed or implied, including implied warranties of merchantability and fitness for a particular purpose.
            </p>
          </div>

          {/* Section 13: Limitation Of Liability */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Limitation Of Liability
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                The information, software, products, and services included in or accessible through the Website may contain inaccuracies or typographical errors. Periodic changes are made to the information contained herein. The Company and/or its suppliers may make improvements and/or alterations to the Website at any given time. The Company and/or its suppliers do not guarantee the appropriateness, reliability, availability, timeliness, or accuracy of the information, software, products, services, and related graphics contained on the Website for any purpose. To the maximum extent permissible by applicable law, all such information, software, products, services, and related graphics are provided &quot;as is&quot; without any warranty or condition of any kind. The Company and/or its suppliers hereby disclaim all warranties and conditions with regard to this information, software, products, services, and related graphics, including all implied warranties or conditions of merchantability, fitness for a particular purpose, title, and non-infringement.
              </p>
              <p>
                To the maximum extent permitted by applicable law, in no event shall the Company and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages, or any other kind of loss or damage, including, without limitation, damages for loss of use, data, or profits, arising out of or in any way connected with the use or performance of the Website, the delay or inability to use the Website or associated services, the provision of or failure to provide services, or for any information, software, products, services, and related graphics obtained through the Website, or otherwise originating from the use of the Website, whether based on contract, tort, negligence, strict liability, or other legal theories, even if the Company or any of its suppliers have been advised of the possibility of damages. Because some states/jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. If you are dissatisfied with any portion of the Website, or with any of these Terms of Use, your sole and exclusive remedy is to discontinue using the Website.
              </p>
            </div>
          </div>

          {/* Section 14: Contact Us */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Contact Us
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              Email Address:{" "}
              <a
                href="mailto:Sales@profitplus.us"
                className="text-zinc-900 hover:text-[#199250] font-medium transition-colors"
              >
                Sales@profitplus.us
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
