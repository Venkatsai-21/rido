import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Star, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import { rides } from "@/data/rides";

export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ride = rides.find((r) => r.id === id) ?? rides[0];
  return <><Navbar/><main className="min-h-screen bg-[#f7faf8]"><div className="container py-8">
    <Link href={`/rides/${ride.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#607477]"><ArrowLeft size={16}/> Back to ride</Link>
    <div className="mx-auto mt-8 max-w-5xl">
      <div className="mb-8"><p className="eyebrow">Step 1 of 3</p><h1 className="mt-2 text-4xl font-black tracking-tight">Choose your seats</h1><p className="mt-2 text-[#607477]">Review the journey and tell us how many seats you need.</p></div>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="rounded-[28px] border border-[#dce9e5] bg-white p-6 sm:p-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#e8f7f2] via-[#fffaf0] to-[#ffe8dc] p-6">
            <div className="flex items-center justify-between gap-4"><div><p className="text-2xl font-black">{ride.from}</p><p className="mt-1 text-sm text-[#607477]">{ride.date} · {ride.departure}</p></div><ArrowRight className="text-[#0f9f88]"/><div className="text-right"><p className="text-2xl font-black">{ride.to}</p><p className="mt-1 text-sm text-[#607477]">{ride.arrival} · {ride.duration}</p></div></div>
          </div>
          <div className="mt-8"><label className="text-sm font-bold">Number of seats</label><div className="mt-3 grid grid-cols-3 gap-3">{[1,2,3].map(n=><div key={n} className={`rounded-2xl border-2 p-4 text-center ${n===1?'border-[#0f9f88] bg-[#effaf7]':'border-[#dce9e5]'}`}><div className="text-xl font-black">{n}</div><div className="mt-1 text-xs text-[#607477]">{n===1?'seat':'seats'}</div></div>)}</div></div>
          <div className="mt-8 border-t border-[#e7efec] pt-6"><h2 className="font-black">Pickup & drop</h2><div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-[#f7faf8] p-4"><p className="text-xs text-[#809294]">Pickup</p><p className="mt-1 font-bold">{ride.pickup}</p></div><div className="rounded-2xl bg-[#f7faf8] p-4"><p className="text-xs text-[#809294]">Drop-off</p><p className="mt-1 font-bold">{ride.drop}</p></div></div></div>
          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-[#f7faf8] p-4"><ShieldCheck className="mt-0.5 shrink-0 text-[#0f9f88]" size={20}/><p className="text-sm leading-6 text-[#607477]">You’ll review the final price and payment details before the booking is confirmed.</p></div>
        </section>
        <aside className="h-fit rounded-[28px] border border-[#dce9e5] bg-white p-6 shadow-sm lg:sticky lg:top-24"><p className="eyebrow">Your journey</p><div className="mt-5 flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-full bg-[#e8f7f2] font-black text-[#0f9f88]">{ride.initials}</div><div><p className="font-black">{ride.driver}</p><p className="mt-1 flex items-center gap-1 text-xs text-[#607477]"><Star size={13} className="fill-amber-400 text-amber-400"/> {ride.rating} · {ride.rides} rides</p></div></div><div className="mt-6 border-t border-[#e7efec] pt-5"><div className="flex justify-between text-sm"><span className="text-[#607477]">Seat contribution</span><b>${ride.price}</b></div><div className="mt-3 flex justify-between text-sm"><span className="text-[#607477]">Seats</span><b>1</b></div><div className="mt-5 flex justify-between border-t border-[#e7efec] pt-4"><span className="font-black">Total</span><span className="text-2xl font-black">${ride.price}</span></div></div><Link href={`/checkout/${ride.id}`} className="rido-primary mt-6 block rounded-xl py-3.5 text-center text-sm font-bold">Continue <ArrowRight className="ml-1 inline" size={16}/></Link></aside>
      </div></div></div></main></>
}
