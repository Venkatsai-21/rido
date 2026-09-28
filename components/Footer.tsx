import Link from 'next/link';
import { Compass, Mail } from 'lucide-react';

export default function Footer() {
  return <footer className="border-t border-[#dce9e5] bg-[#f1f8f5]">
    <div className="container grid gap-10 py-14 md:grid-cols-[1.7fr_1fr_1fr_1fr]">
      <div>
        <div className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0f9f88] text-white"><Compass size={18}/></span><span className="text-lg font-black">rido</span></div>
        <p className="mt-4 max-w-xs text-sm leading-6 text-[#607477]">Go together. Go farther. Shared city-to-city journeys made simple.</p>
        <div className="mt-5 flex gap-2"><a href="mailto:hello@rido.com" aria-label="Email Rido" className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#0f9f88] transition hover:bg-[#0f9f88] hover:text-white"><Mail size={16}/></a><a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-bold text-[#0f9f88] transition hover:bg-[#0f9f88] hover:text-white">IG</a></div>
      </div>
      <div><h3 className="text-sm font-bold">Product</h3><div className="mt-4 grid gap-3 text-sm text-[#607477]"><Link href="/find-a-ride">Find a ride</Link><Link href="/#offer">Offer a ride</Link><Link href="/#how">How it works</Link><Link href="/#safety">Safety</Link></div></div>
      <div><h3 className="text-sm font-bold">Company</h3><div className="mt-4 grid gap-3 text-sm text-[#607477]"><span>About</span><span>Help</span><span>Contact</span></div></div>
      <div><h3 className="text-sm font-bold">Legal</h3><div className="mt-4 grid gap-3 text-sm text-[#607477]"><span>Terms</span><span>Privacy</span><span>Cancellation</span></div></div>
    </div>
    <div className="container border-t border-[#dce9e5] py-5 text-xs text-[#809294]">© 2026 Rido. Prototype experience.</div>
  </footer>;
}
