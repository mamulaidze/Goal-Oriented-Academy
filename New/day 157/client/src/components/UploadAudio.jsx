import { useState, useEffect } from 'react';
import axios from 'axios';

function UploadAudio() {
  const [audioFile, setAudioFile] = useState(null);
  const [songs, setSongs] = useState([]);

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!audioFile) return alert('აირჩიე ფაილი');

    const formData = new FormData();
    formData.append('audio', audioFile);

    try {
      await axios.post('http://localhost:4000/api/upload', formData);
      fetchSongs(); // ატვირთვის შემდეგ ხელახლა წამოიღოს სია
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const fetchSongs = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/songs');
      setSongs(res.data);
    } catch (error) {
      console.error('Fetch songs failed:', error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">ატვირთე სიმღერა</h1>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        ატვირთე
      </button>

      <h2 className="text-xl mt-6">სიმღერები:</h2>
      <ul className="space-y-4">
        {songs.map((song) => (
          <li key={song._id}>
            <p className='text-red-600'>{song.title}</p>
            <audio controls src={`http://localhost:4000/${song.filePath}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UploadAudio;
