import CTAButton from "@/components/CTAButton";

export default function HeroSection() {
  return (
    <section className="relative bg-[url('/hero-bg.png')] bg-cover bg-center text-white py-24">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          顧客情報を、チームの力に変える。
        </h1>

        <p className="text-lg md:text-xl mb-8">
          営業・サポート・マーケティングを一元管理。<br />
          業務効率と顧客満足を同時に高めるクラウドCRM。
        </p>

        <CTAButton />
      </div>
    </section>
  );
}
