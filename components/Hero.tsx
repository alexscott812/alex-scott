import Link from "next/link";

const HeroCard = () => {
  return (
    <div className="mb-6">
      <h3 className="pb-4 text-3xl font-bold">
        Hi, I'm Alex.
      </h3>
      <p className="pb-4">I'm a full stack developer currently based in Brooklyn, NY. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <Link href="/projects">
        <button className="rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 font-semibold text-white transition-colors hover:from-violet-700 hover:to-indigo-700">
          View Projects
        </button>
      </Link>
      <Link href="/contact">
        <button className="rounded-lg bg-stone-100 px-4 py-2 font-semibold text-black transition hover:bg-stone-200">
          Contact
        </button>
      </Link>
    </div>
  );
};

export default HeroCard;