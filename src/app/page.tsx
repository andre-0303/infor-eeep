import Banner from "@/components/banner/page"
import SobreCurso from "@/components/sobre_curso/page"
import Carrousel from "@/components/carrousel/page"

export default function Home() {
  return (
    <>
      <Banner />
      <main className="flex min-h-screen flex-col justify-between p-4 md:p-24 w-full">
        <SobreCurso />
      </main>
      <Carrousel /> 
    </>
  )
}
