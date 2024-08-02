import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { File } from "@/models/file";
import { RxCalendar, RxStopwatch } from "react-icons/rx";

const FileCard = ({ name, length, date }: File) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>

        <CardContent className="flex justify-between">
          <div className="flex items-center">
            <RxStopwatch className="mr-2" />
            {length}
          </div>
          <div className="flex items-center">
            <RxCalendar className="mr-2" /> {date}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FileCard;
