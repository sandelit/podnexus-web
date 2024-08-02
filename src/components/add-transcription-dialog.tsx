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
import { Button } from "./ui/button";
interface AddTranscriptionDialogProps {
  buttonText: string;
}
const AddTranscriptionDialog = (
  { buttonText }: AddTranscriptionDialogProps,
) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          {buttonText}
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
  );
};

export default AddTranscriptionDialog;
