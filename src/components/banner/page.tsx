import Image from 'next/image';

export default function Banner() {
    return (
        <div className="relative w-full h-[300px] md:h-[500px]">
            <Image
                src="/banner.jpg"
                alt="banner"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />

            <div className="absolute inset-0 bg-blue-600 opacity-40"></div>

            <div className="absolute inset-0 flex items-center justify-center flex-col text-white text-center">
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-extrabold'>
                    Curso Técnico em Informática
                </h1>
                <h4 className='text-base sm:text-lg md:text-xl font-normal mt-2'>
                    Tecnologia, inovação e futuro começam aqui
                </h4>
            </div>
        </div>
    );
}
