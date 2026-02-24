import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { About } from "./about/page";

export default function Home() {
  return (
 <>
 <Button variant="secondary">Button</Button>
 <ThemeToggle/>
 <About />
 

 </>
  );
}
