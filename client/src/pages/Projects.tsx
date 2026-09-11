import { ArrowLeft, ArrowUpRight, Building2, CheckCircle2, Factory, ShieldCheck, Sun, Wrench, Zap } from "lucide-react";

const projects = [
  { code: "HV / TRF", title: "ระบบไฟฟ้าแรงสูงและหม้อแปลงไฟฟ้า", description: "ติดตั้งระบบไฟฟ้าแรงสูง หม้อแปลง และอุปกรณ์ที่เกี่ยวข้อง พร้อมงานเชื่อมต่อและตรวจสอบระบบ", image: "/assets/plaifa-transformer.jpg", icon: Zap },
  { code: "MDB / MCC", title: "ตู้เมนสวิตช์บอร์ดและระบบควบคุม", description: "ติดตั้งและจัดระบบ MDB, DB, MCC รวมถึงงานเดินสายและจัดระเบียบระบบจ่ายไฟ", image: "/assets/plaifa-mdb.jpg", icon: Building2 },
  { code: "CABLE", title: "Cable Tray & Wireway", description: "ออกแบบและติดตั้งแนวทางเดินสายไฟให้เป็นระเบียบ รองรับการตรวจสอบและบำรุงรักษา", image: "/assets/plaifa-cabletray.jpg", icon: Wrench },
  { code: "SERVICE", title: "ตรวจสอบและบำรุงรักษาระบบไฟฟ้า", description: "ตรวจสอบระบบ วิเคราะห์ปัญหา และแก้ไขงานโดยคำนึงถึงความปลอดภัยและความพร้อมใช้งาน", image: "/assets/plaifa-technician.jpg", icon: ShieldCheck },
  { code: "FACTORY", title: "งานติดตั้งระบบไฟฟ้าโรงงาน / อาคาร", description: "งานระบบไฟฟ้าสำหรับโครงการใหม่และงานปรับปรุงระบบเดิม ตั้งแต่หน้างานจนถึงส่งมอบ", image: "/assets/plaifa-hero.jpg", icon: Factory },
  { code: "SOLAR", title: "ระบบผลิตไฟฟ้าจากพลังงานแสงอาทิตย์", description: "ออกแบบ ติดตั้ง และเชื่อมต่อระบบโซลาร์รูฟท็อปเพื่อช่วยเพิ่มประสิทธิภาพการใช้พลังงาน", image: "/assets/plaifa-hero.jpg", icon: Sun },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f3f5f6] text-[#10202d]">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f3f5f6]/95 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="/" aria-label="กลับหน้าหลัก" className="flex items-center">
            <img src="/assets/paifa-engineering-logo.png" alt="Plaifa Engineering" className="h-14 w-auto object-contain" />
          </a>
          <a href="/" className="inline-flex items-center gap-2 rounded-full border border-[#d4dce1] px-4 py-2.5 text-sm font-bold text-[#10202d] transition hover:border-[#f47a27] hover:text-[#f47a27]">
            <ArrowLeft size={16} /> กลับหน้าหลัก
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#091824] py-20 text-white sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(244,122,39,0.22),transparent_35%)]" />
          <div className="container relative">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-[#ff9a55]"><span className="h-px w-10 bg-[#f47a27]" />PLAIFA ENGINEERING • PROJECTS</div>
              <h1 className="display text-4xl font-bold tracking-[-0.04em] sm:text-6xl">ผลงานที่ผ่านมา</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/85 sm:text-lg">รวมตัวอย่างงานด้านระบบไฟฟ้า งานวิศวกรรม และงานบริการภาคสนามของ Plaifa Engineering โดยเน้นคุณภาพ ความปลอดภัย และความเรียบร้อยของงาน</p>
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="text-xs font-bold tracking-[0.2em] text-[#f47a27]">OUR WORK</p><h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">งานด้านระบบไฟฟ้า</h2></div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">สามารถเพิ่มรูปโครงการจริง รายละเอียดขอบเขตงาน และข้อมูลโครงการแต่ละรายการได้ในหน้านี้ภายหลัง</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => { const Icon = project.icon; return (
              <article key={project.code} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,31,45,0.07)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={project.image} alt={project.title} className="size-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091824]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-[#091824]/85 px-3 py-2 text-[11px] font-bold tracking-[0.12em] text-white backdrop-blur-sm"><Icon size={15} className="text-[#f47a27]" />{project.code}</div>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500"><span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#f47a27]" />งานเป็นระบบ</span><span className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-[#f47a27]" />เน้นความปลอดภัย</span></div>
                </div>
              </article>
            ); })}
          </div>
        </section>

        <section className="container pb-20">
          <div className="rounded-[30px] bg-[#10202d] p-8 text-white sm:p-12"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-bold tracking-[0.2em] text-[#ff9a55]">LET'S WORK TOGETHER</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">มีโครงการระบบไฟฟ้าที่ต้องการให้เราดูแล?</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">ส่งรายละเอียดงานให้ทีม Plaifa Engineering ประเมินขอบเขตและแนวทางดำเนินงาน</p></div><a href="/#contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#f47a27] px-6 py-4 text-sm font-bold text-[#10202d] transition hover:-translate-y-0.5 hover:bg-[#ff964e]">ขอใบเสนอราคา <ArrowUpRight size={17} /></a></div></div>
        </section>
      </main>
    </div>
  );
}
