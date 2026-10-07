import CTAButton from "@/components/CTAButton";

export default function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center text-slate-900 py-32 md:py-44"
      style={{ backgroundImage: "url('/images/backgrounds/bg1.png')" }}
    >

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          顧客情報を、チームの力に変える。
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-slate-700">
          営業・サポート・マーケティングを一元管理。 <br />
          業務効率と顧客満足を同時に高めるクラウドCRM。
        </p>

        <CTAButton />
      </div>
    </section>
  );
}