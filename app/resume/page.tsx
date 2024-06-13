import { title } from "@/components/primitives";

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-3 text-center bg-red-600">
      <div className="flex flex-col content-center">
        <div>
          <h1>Fidaa Mahboob</h1>
        </div>
        <div>
          <h2>Full Stack Software Engineer</h2>
        </div>
      </div>
      <div className="flex flex-col gap-6 bg-blue-400">
        <div>
          <h2>About</h2>
        </div>
        <div>
          <h2>Skills</h2>
        </div>
        <div>
          <h2>Experience</h2>
        </div>
        <div>
          <h2>Projects</h2>
        </div>
      </div>
  </div>
  );
}
