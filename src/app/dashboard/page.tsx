const Dashboard = () => {
  return <div className="w-1/2 h-96 border-2 border-black">dashie</div>;
};
export default Dashboard;
/*
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Dashboard() {
  const session = useSession();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const transcribe = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("/api/users", {
        headers: { Authorization: `Bearer ${session.data?.user.accessToken}` },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Transcription result:", data);
      // Handle transcription result here
    } catch (error) {
      console.error("Error during transcription:", error);
    }
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2 border-2 border-black flex flex-col justify-center items-center gap-6
        ">
        <h1 className="text-3xl bold underline">dashboard</h1>

        <Input type="file" className="w-64" onChange={handleFileChange} />
        <Button onClick={transcribe}>Trancsribe</Button>
      </div>
    </section>
  );
}
*/
