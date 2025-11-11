import Image from "next/image";

interface Member {
  name: string;
  image: string;
  size: number;
  position: string; // tailwind position classes
}

const members: Member[] = [
  {
    name: "Atharv",
    image: "/images/image.png",
    size: 290,
    position: "top-0 left-0",
  },
  {
    name: "Akash",
    image: "/images/image.png",
    size: 260,
    position: "top-16 right-40",
  },
  {
    name: "Tushar",
    image: "/images/image.png",
    size: 230,
    position: "top-36 left-80",
  },
  {
    name: "Anke",
    image: "/images/image.png",
    size: 180,
    position: "bottom-0 left-24",
  },
  {
    name: "Anshul",
    image: "/images/image.png",
    size: 200,
    position: "bottom-5 left-120",
  },
  {
    name: "Dhanush",
    image: "/images/image.png",
    size: 130,
    position: "bottom-16 right-32",
  },
  {
    name: "Akash",
    image: "/images/image.png",
    size: 220,
    position: "top-44 right-0",
  },
];

export default function FloatingTeam() {
  return (
    <div>
      <h1 className="text-center font-extrabold text-5xl">The Team Who Made It Possible</h1>

    <section className="relative flex justify-center items-center min-h-[600px] bg-black">
      <div className="relative w-full max-w-5xl h-[600px]">
        {members.map((member) => (
          <div
            key={member.name}
            className={`absolute ${member.position} flex flex-col items-center`}
            style={{ width: member.size }}
          >
            <div
              className={`rounded-full border-[6px] border-blue-100 shadow-lg overflow-hidden`}
              style={{ width: member.size, height: member.size }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={member.size}
                height={member.size}
                className="object-cover"
              />
            </div>

            <span className="mt-2 px-4 py-1 text-white bg-blue-600 rounded-full text-sm font-semibold">
              {member.name}
            </span>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
