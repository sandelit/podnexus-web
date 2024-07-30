import FileCard from "@/components/file-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { File } from "@/models/file";

const Dashboard = () => {
  const files: File[] = [
    {
      id: "123",
      name: "jfk.wav",
      length: "00:11",
      date: "07/27/2014",
    },
    {
      id: "124",
      name: "test.mp3",
      length: "01:38",
      date: "07/03/2018",
    },
  ];

  return (
    <>
      <Separator />
      <div className="w-screen h-full flex justify-center ">
        <Separator orientation="vertical" />
        <ul>
          {files?.map((file: File) => (
            <li key={file.id}>
              <FileCard {...file} />
            </li>
          ))}
        </ul>
        <Separator orientation="vertical" />
        <div className="w-[1000px] p-[50px] rounded-xl border-black dark:border-white flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                {files?.length ? "Trancsribe" : "Transcribe your first file"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Transcribe Files</DialogTitle>
                <DialogDescription>
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Input type="file" />
              </div>
              <DialogFooter>
                <Button type="submit">Transcribe</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
