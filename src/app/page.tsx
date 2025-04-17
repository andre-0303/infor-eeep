import Banner from "@/components/banner/page";
import SobreCurso from "@/components/sobre_curso/page";

export default function Home() {
  return (
   <>
    <Banner />
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <SobreCurso />
    </main>

   </>
  );
}