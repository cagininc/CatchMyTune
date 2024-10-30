"use client"
// import { Element } from "react-scroll";
import { Upload, Link as LinkIcon } from "lucide-react"; // Lucide ikonları
import { ChangeEvent,  useState } from "react";
import Button from "../components/Button";
import { AudioLines } from 'lucide-react';
const Features = () => {
  const [file, setFile] = useState<File|null>(null);
  const [spotifyLink, setSpotifyLink] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);}};

  const handleUpload = () => {
    if (file) {
      console.log("Dosya yüklendi:", file.name);
    } else if (spotifyLink) {
      console.log("Spotify linki yüklendi:", spotifyLink);
    }
  };

  return (
    <section id="features" className="bg-transparent py-16 relative z-10">
      {/* <Element name="features"> */}
        <div className="container mx-2 relative border-2 border-gray-300 rounded-3xl p-0 shadow-lg">
          {/* Mavi Blur Efekt Alanı */}
          <div className="absolute inset-0 rounded-3xl bg-blue-500 opacity-30 blur-[1000px] -z-1"></div>

          {/* Ses Yükleme ve Spotify Link Kartı */}
          <div className="relative z-10 flex justify-center p-8 bg-opacity-80 backdrop-blur-md rounded-lg">
            <div className="w-full lg:w-1/2 p-8 bg-black/60 rounded-lg shadow-md border border-gray-500">
              <div className="flex items-center justify-center mb-6">
                <Upload className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-center text-white mb-6">
                Upload Audio or Add Spotify Link
              </h2>
              <p className="text-gray-200 text-center mb-8">
                Upload your audio file or enter a Spotify link to analyze its key, tempo, and more.
              </p>

              {/* Spotify Link Girişi */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <LinkIcon className="w-6 h-6 mr-2 text-white" />
                  <label htmlFor="spotifyLink" className="text-white font-semibold">
                    Spotify Link
                  </label>
                </div>
                <input
                  type="text"
                  id="spotifyLink"
                  value={spotifyLink}
                  onChange={(e) => setSpotifyLink(e.target.value)}
                  placeholder="Enter Spotify link"
                  className="w-full p-2 mb-4 text-black rounded-md"
                />
              </div>

              {/*Upload section */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Upload className="w-6 h-6 mr-2 text-white" />
                  <label htmlFor="audioFile" className="text-white font-semibold">
                    Upload Audio File
                  </label>
                </div>
                <input
                  type="file"
                  id="audioFile"
                  onChange={handleFileChange}
                  className="w-full p-2 mb-4 text-white rounded-md"
                />
              </div>

              {/* Yükleme Butonu */}
              <div className="flex justify-center">
                <Button   onClick={handleUpload} icon={<Upload />}>
                Upload & Analyze 
                   <div className="flex justify-center gap-2"><AudioLines /> </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Features;
