import AddTranscriptionDialog from "@/components/add-transcription-dialog";
import FileCard from "@/components/file-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { File } from "@/models/file";

enum Mode {
  "None",
  "Selected",
  "Trancsribe",
}

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

  const currentMode: Mode = files?.length ? Mode.Trancsribe : Mode.None;

  const renderSwitch = (mode: Mode) => {
    switch (mode) {
      case Mode.Trancsribe:
        return <AddTranscriptionDialog buttonText="Transcribe" />;

      case Mode.None:
        return <div>none</div>;
      case Mode.Selected:
        return <div>select</div>;

      default:
        break;
    }
  };

  return (
    <>
      <Separator />
      <div className="w-screen h-full flex justify-center ">
        <Separator orientation="vertical" />
        <div className="w-64 m-4 flex flex-col justify-between">
          <ul>
            {files?.map((file: File) => (
              <li key={file.id}>
                <FileCard {...file} />
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <AddTranscriptionDialog buttonText="Transcribe" />
          </div>
        </div>
        <Separator orientation="vertical" />
        <div className="w-[1000px] p-[50px] rounded-xl border-black dark:border-white flex justify-center">
          {renderSwitch(currentMode)}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
