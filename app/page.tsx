import { Button } from "@/components/ui/button";

import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <h1 className="test-ln font-bold capitalize">
          Here&apos;s the button shadcn/ui button</h1>

          <div className="flex gap-2">
            <Button>Click Me!</Button>
            <Button variant="outline">Click Me!</Button>
            <Button variant="outline" size="icon" aria-label="Submit">
            <ArrowUpIcon />
            </Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>

            
            
            

          </div>
        

      </main>
    </div>
  );
}
