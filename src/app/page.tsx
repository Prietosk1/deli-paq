import Button from "@/components/Button";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 p-5">
      <Title />
      <p className="text-md w-150 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sit amet justo maximus, dapibus erat sit amet, laoreet mauris. Vivamus.
      </p>
      <Button />
    </div>
  );
}
