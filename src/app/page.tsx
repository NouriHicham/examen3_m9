import { Button } from "@/components/ui/button";
import { ArrowUpDown, ChevronRight, Clock, Route } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-[50vh] bg-black text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Information you need during <br /> on-call emergencies
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Quickly link new on-call tickets to similar past incidents and their solutions. All <br /> directly in Slack the moment an incident happens.
        </p>
        <Button className="bg-white text-black px-8 py-4 text-lg font-semibold rounded">
          Get Started <ChevronRight className="ml-2" />
        </Button>
      </section>
      <section className="flex items-center justify-center">
        <img src="heroimage.png" alt="Hero Image" className="h-[80vh] w-auto"/>
      </section>
      <section className="flex flex-col items-center justify-center py-64 bg-black text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-20">
          Quick solutions, less stress
        </h1>
        <div className="flex text-start">
          <div className="mr-8 flex flex-col items-start">
            <div className="p-7 border border-white rounded-2xl"><Clock size={36} /></div>
            <h2 className="text-2xl font-bold mt-10">Fix emergencies fast</h2>
            <p className="text-[20px] mt-10 w-[500px]">Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks</p>
          </div>
          <div className="mr-8 flex flex-col items-start">
            <div className="p-7 border border-white rounded-2xl"><ArrowUpDown size={36} /></div>
            <h2 className="text-2xl font-bold mt-10">Universally compatible</h2>
            <p className="text-lg mt-10 w-[500px]">Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="p-7 border border-white rounded-2xl"><Route size={36} /></div>
            <h2 className="text-2xl font-bold mt-10">Secure for your org</h2>
            <p className="text-lg mt-10 w-[500px]">We keep your data safe by taking top security measures.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-20">Instant setup, no custom<br /> code</h1>
        <p className="text-lg md:text-2xl mb-20">Invite the bot, pick a channel, and you're set—no custom code needed, and no vendor lock-in.</p>
        <img src="heroimage.png" alt="Hero Image" className="h-[60vh] w-auto"/>
      </section>
      <section className="flex flex-col items-center justify-center py-64 bg-black text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-10">
          Get in touch
        </h1>
        <p className="text-lg md:text-2xl mb-10">Request a demo, or hop on a call.</p>
        <Button className="bg-white text-black px-8 py-4 text-lg font-semibold rounded">
          Get Started <ChevronRight className="ml-2" />
        </Button>
      </section>
    </main>
  );
}
