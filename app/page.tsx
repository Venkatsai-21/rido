'use client';

import {
  ArrowRight,
  CalendarDays,
  CarFront,
  Check,
  ChevronRight,
  CircleCheck,
  Compass,
  MapPin,
  MessageCircle,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Users,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { routes } from '@/data/routes';

const benefits = [
  { i: ShieldCheck, t: 'Know who you travel with', d: 'See profile details, ratings and trip information before you reserve.' },
  { i: Route, t: 'Follow the real route', d: 'Clear pickup, drop and journey details keep the experience easy to understand.' },
  { i: MessageCircle, t: 'Stay connected', d: 'Keep trip questions and pickup messages in one simple conversation.' },
  { i: Wallet, t: 'See the contribution upfront', d: 'Know the passenger contribution before you decide to join.' },
];

const gallery = [
  { city: 'Austin', place: 'Morning departure', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85' },
  { city: 'Dallas', place: 'Weekend escape', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85' },
  { city: 'Los Angeles', place: 'Long weekend', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85' },
  { city: 'San Diego', place: 'Coastal drive', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85' },
  { city: 'New York', place: 'Road to the coast', image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=85' },
  { city: 'Seattle', place: 'Slow travel', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85' },
];

const stories = [
  { tag: 'Weekend', title: 'A Friday road out of the city.', text: 'Austin → Dallas', image: gallery[0].image },
  { tag: 'Explore', title: 'Take the scenic way home.', text: 'Los Angeles → San Diego', image: gallery[2].image },
];

export default function Home() {
  const [from, setFrom] = useState('Austin');
  const [to, setTo] = useState('Dallas');

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section className="relative bg-[#f8fbf7]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(99,210,185,.22),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(255,201,157,.28),transparent_30%),linear-gradient(135deg,#edf9f3_0%,#fffdf6_48%,#fff0e4_100%)]" />
          <div className="container relative grid min-h-[760px] items-center gap-10 py-12 lg:grid-cols-[.92fr_1.08fr] lg:py-16">
            <div className="max-w-2xl pb-3 lg:pb-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-xs font-bold text-[#46706b] shadow-sm backdrop-blur">
                <Sparkles size={14} className="text-[#0b9d87]" />
                City-to-city rides, made human
              </div>
              <h1 className="text-balance text-[clamp(3.6rem,7vw,6.8rem)] font-black leading-[.87] tracking-[-.075em] text-[#102c2b]">
                Go together.
                <br />
                <span className="bg-gradient-to-r from-[#087f6e] via-[#10a68e] to-[#5cb8a5] bg-clip-text text-transparent">Go farther.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#587071] sm:text-xl">
                Find people already heading your way, share the journey, and make the road between cities feel a little more human.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/find-a-ride" className="rido-primary-dark rounded-full px-7 py-4 text-sm font-black">
                  Find a ride <ArrowRight size={17} />
                </Link>
                <a href="#offer" className="inline-flex items-center gap-2 rounded-full border border-white bg-white/85 px-7 py-4 text-sm font-black text-[#244b49] shadow-sm backdrop-blur transition hover:-translate-y-1">
                  Offer a ride
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#607778]">
                <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-[#0f9f88]" /> Verified profiles</span>
                <span className="inline-flex items-center gap-2"><Star size={16} className="fill-[#f1a43a] text-[#f1a43a]" /> Community ratings</span>
                <span className="inline-flex items-center gap-2"><Wallet size={16} className="text-[#e78a55]" /> Shared costs</span>
              </div>
            </div>

            <div id="find" className="relative lg:pl-4">
              <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#75d8c3]/35 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#ffcba8]/35 blur-3xl" />
              <div className="relative overflow-hidden rounded-[38px] border border-white/90 bg-white/86 p-2 shadow-[0_35px_100px_rgba(29,76,70,.18)] backdrop-blur-xl">
                <div className="relative h-44 overflow-hidden rounded-[30px] sm:h-52">
                  <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=85" alt="Open road through a city" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e302e]/70 via-[#0e302e]/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-[11px] font-black uppercase tracking-[.18em] text-white/70">Your next journey</p>
                    <p className="mt-1 text-xl font-black">Find someone already going your way.</p>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between px-1 pb-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[.16em] text-[#0f9f88]">Find a ride</p>
                      <h2 className="mt-1 text-2xl font-black tracking-tight text-[#102c2b]">Where are you headed?</h2>
                    </div>
                    <div className="hidden h-11 w-11 place-items-center rounded-2xl bg-[#e4f8f1] text-[#0f9f88] sm:grid"><Compass size={20} /></div>
                  </div>
                  <div className="rounded-[24px] border border-[#dce9e5] bg-[#fbfdfc] shadow-sm">
                    <label className="block border-b border-[#e7efec] p-4">
                      <span className="text-[10px] font-black uppercase tracking-[.14em] text-[#8b9b9c]">From</span>
                      <div className="mt-1 flex items-center gap-2"><MapPin size={17} className="text-[#0f9f88]" /><input value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-transparent text-base font-bold text-[#183b3a] outline-none" /></div>
                    </label>
                    <label className="block p-4">
                      <span className="text-[10px] font-black uppercase tracking-[.14em] text-[#8b9b9c]">To</span>
                      <div className="mt-1 flex items-center gap-2"><MapPin size={17} className="text-[#e58b55]" /><input value={to} onChange={e => setTo(e.target.value)} className="w-full bg-transparent text-base font-bold text-[#183b3a] outline-none" /></div>
                    </label>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <label className="rounded-[20px] border border-[#dce9e5] bg-white p-4"><span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[.14em] text-[#8b9b9c]"><CalendarDays size={13} /> Date</span><input type="date" className="mt-2 w-full bg-transparent text-sm font-bold text-[#183b3a] outline-none" /></label>
                    <label className="rounded-[20px] border border-[#dce9e5] bg-white p-4"><span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[.14em] text-[#8b9b9c]"><UserRound size={13} /> Seats</span><select className="mt-2 w-full bg-transparent text-sm font-bold text-[#183b3a] outline-none"><option>1 passenger</option><option>2 passengers</option><option>3 passengers</option><option>4 passengers</option></select></label>
                  </div>
                  <Link href={`/find-a-ride?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`} className="rido-primary mt-3 w-full rounded-[20px] py-4 text-sm font-black"><Search size={17} /> Search rides</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e5ece8] bg-white">
          <div className="container grid gap-8 py-7 sm:grid-cols-3">
            <div><p className="text-2xl font-black text-[#102c2b]">50K+</p><p className="mt-1 text-sm text-[#718486]">traveler journeys</p></div>
            <div><p className="text-2xl font-black text-[#102c2b]">4.8 ★</p><p className="mt-1 text-sm text-[#718486]">community rating</p></div>
            <div><p className="text-2xl font-black text-[#102c2b]">City to city</p><p className="mt-1 text-sm text-[#718486]">built around shared routes</p></div>
          </div>
        </section>

        <section id="how" className="bg-[#fbfdfb]"><div className="container section-pad"><div className="max-w-2xl"><p className="eyebrow">The Rido way</p><h2 className="section-title">A shared trip, without the friction.</h2><p className="section-copy">Search the route, choose the person and trip that fit, then meet at the pickup point.</p></div><div className="mt-12 grid gap-4 md:grid-cols-3">{[{n:'01',i:Search,t:'Discover',d:'Search the route and date you already have in mind.',c:'bg-[#e4f8f1] text-[#0f9f88]'},{n:'02',i:CircleCheck,t:'Choose',d:'Compare people, vehicles, ratings and trip preferences.',c:'bg-[#fff0e5] text-[#e58b55]'},{n:'03',i:Users,t:'Go together',d:'Meet at the agreed point and share the road.',c:'bg-[#edf0ff] text-[#6678d7]'}].map(({n,i:I,t,d,c})=><div key={n} className="group relative rounded-[30px] border border-[#dfe9e5] bg-white p-7 shadow-[0_12px_40px_rgba(35,72,65,.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(35,72,65,.10)] sm:p-8"><span className="absolute right-6 top-6 text-xs font-black tracking-[.16em] text-[#a1afaf]">{n}</span><span className={`grid h-12 w-12 place-items-center rounded-2xl ${c}`}><I size={21} /></span><h3 className="mt-12 text-xl font-black text-[#102c2b]">{t}</h3><p className="mt-2 text-sm leading-6 text-[#687c7e]">{d}</p></div>)}</div></div></section>

        <section className="bg-[#f1f8f5]"><div className="container section-pad"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow">Popular routes</p><h2 className="section-title">Routes people already share.</h2></div><Link href="/find-a-ride" className="hidden items-center gap-1 text-sm font-black text-[#087f6e] sm:flex">Explore rides <ChevronRight size={17} /></Link></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{routes.map((r, i) => <Link key={r.from + r.to} href={`/find-a-ride?from=${encodeURIComponent(r.from)}&to=${encodeURIComponent(r.to)}`} className="group overflow-hidden rounded-[28px] border border-[#dbe8e3] bg-white transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(32,82,73,.10)]"><div className="relative h-32 overflow-hidden"><img src={gallery[i % gallery.length].image} alt={`${r.from} to ${r.to}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0c302e]/70 to-transparent" /><div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-sm font-black text-white"><span>{r.from}</span><ArrowRight size={15} /><span>{r.to}</span></div></div><div className="flex items-center justify-between p-5"><div><p className="text-sm font-black text-[#183b3a]">From {r.price}</p><p className="mt-1 text-xs text-[#718486]">{r.time} · shared ride</p></div><span className="grid h-9 w-9 place-items-center rounded-full bg-[#e4f8f1] text-[#0f9f88] transition group-hover:bg-[#0f9f88] group-hover:text-white"><ChevronRight size={17} /></span></div></Link>)}</div></div></section>

        <section className="bg-white"><div className="container section-pad"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow">Route stories</p><h2 className="section-title">The road is part of the journey.</h2><p className="section-copy max-w-xl">Rido is about the people, places and little moments between two cities.</p></div></div><div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">{stories.map((story, i) => <article key={story.title} className={`group relative overflow-hidden rounded-[32px] ${i === 0 ? 'min-h-[420px]' : 'min-h-[420px]'}`}><img src={story.image} alt={story.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0a2726]/80 via-[#0a2726]/20 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9"><span className="rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-black uppercase tracking-[.14em] backdrop-blur">{story.tag}</span><h3 className="mt-4 max-w-lg text-3xl font-black tracking-[-.035em] sm:text-4xl">{story.title}</h3><p className="mt-2 text-sm font-semibold text-white/75">{story.text}</p></div></article>)}</div></div></section>

        <section className="overflow-hidden bg-[#fffaf0] py-20"><div className="container"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow text-[#c77c4f]">Go somewhere</p><h2 className="section-title">A little inspiration for the next trip.</h2></div><p className="max-w-md text-sm leading-6 text-[#756f68]">From early starts to slow weekends, every shared route has a story.</p></div></div><div className="marquee mt-10"><div className="marquee-track">{[...gallery, ...gallery].map((item, index) => <div key={`${item.city}-${index}`} className="w-[280px] shrink-0 sm:w-[360px]"><div className="group relative h-52 overflow-hidden rounded-[28px] sm:h-60"><img src={item.image} alt={item.city} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b302e]/70 to-transparent" /><div className="absolute bottom-4 left-4 text-white"><p className="text-lg font-black">{item.city}</p><p className="text-xs font-semibold text-white/75">{item.place}</p></div></div></div>)}</div></div></section>

        <section className="bg-white"><div className="container section-pad"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><p className="eyebrow">Why Rido</p><h2 className="section-title">Designed around the shared journey.</h2><p className="section-copy">The useful details stay close. The experience stays human.</p></div><div className="grid gap-4 sm:grid-cols-2">{benefits.map(({i:I,t,d}) => <div key={t} className="rounded-[26px] border border-[#dce9e5] bg-gradient-to-br from-white to-[#f4faf7] p-6"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e4f8f1] text-[#0f9f88]"><I size={21} /></span><h3 className="mt-6 font-black text-[#183b3a]">{t}</h3><p className="mt-2 text-sm leading-6 text-[#687c7e]">{d}</p></div>)}</div></div></div></section>

        <section id="safety" className="relative overflow-hidden bg-[#0d3a36] text-white"><div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#33bba3]/20 blur-3xl" /><div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#ffb989]/15 blur-3xl" /><div className="container relative section-pad"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10"><ShieldCheck /></div><p className="mt-6 text-xs font-black uppercase tracking-[.16em] text-[#a7eadc]">Safety & trust</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Travel with the information you need.</h2><p className="mt-5 leading-7 text-white/70">Rido surfaces trip details, ratings and communication tools so people can make informed arrangements.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Profile verification','Driver ratings','Trip information','In-app communication','Emergency assistance','Report a problem'].map(x => <div key={x} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-sm font-semibold backdrop-blur"><span className="grid h-7 w-7 place-items-center rounded-full bg-white/10"><Check size={15} /></span>{x}</div>)}</div></div></div></section>

        <section id="offer" className="bg-[#fffaf0]"><div className="container py-16"><div className="relative overflow-hidden rounded-[34px] bg-gradient-to-r from-[#102c2b] via-[#0b7768] to-[#17a28e] p-8 text-white shadow-2xl shadow-[#0f5c51]/15 sm:p-11"><div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#7ce0cc]/25 blur-3xl" /><div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-black uppercase tracking-[.16em] text-[#a7eadc]">Offer your seats</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Already planning a trip?</h2><p className="mt-2 text-white/70">Turn an empty seat into a shared journey.</p></div><button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-[#0b7768] shadow-lg transition hover:-translate-y-0.5">Offer a ride <ArrowRight size={17} /></button></div></div></div></section>
      </main>
      <Footer />
    </>
  );
}
