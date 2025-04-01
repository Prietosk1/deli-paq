import Button from "@/components/Button";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-8 bg-red-50 h-full p-5 justify-center items-center">
      <Title />
      <p className="w-150 text-md text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sit amet justo maximus, dapibus erat sit amet, laoreet mauris. Vivamus.
      </p>
      <Button />
    </div>
  );
}
