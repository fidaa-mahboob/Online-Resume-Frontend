import { title } from "@/components/primitives";

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-3 text-center content-center bg-red-600">
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl">Fidaa Mahboob</h1>
        </div>
        <div>
          <h2>Full Stack Software Engineer</h2>
        </div>
      </div>
      <div className="flex flex-col gap-6 bg-blue-400">
        <div>
          <h2 className="text-xl"><strong>About</strong></h2>
          <div className="flex justify-center w-auto h-full p-8 bg-yellow-50">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl"><strong>Skills</strong></h2>
        </div>
        <div>
          <h2 className="text-xl"><strong>Experience</strong></h2>
        </div>
        <div>
          <h2 className="text-xl"><strong>Projects</strong></h2>
        </div>
      </div>
    </div>
  );
}
