import { useState } from "react";

export default function RSVP({ onClose = () => {}, onSubmit = (values) => {} }) {
  const [name, setName] = useState("");
  return (
    <div className="fixed md:absolute inset-0 md:inset-auto bg-blue-500 h-1/3 w-full md:w-1/3 rounded-lg text-black text-left">
      <div className="flex items-center justify-between">
        <div className="bg-blue-500 text-white rounded-t font-bold px-1">Instant Message</div>
        <button onClick={onClose} className="p-2 text-white" title="Close Instant Message">
          X
        </button>
      </div>

      <div className="bg-gray-400 flex text-sm border-b px-1">
        <span className="mr-2">File</span>
        <span className="mr-2">Edit</span>
        <span className="mr-2">Insert</span>
        <span className="mr-2">People</span>
      </div>
      <div className="h-48 bg-white">
        <span className="font-bold text-red-600">Steph's 30th</span>: Will you be joining us for my
        party??
      </div>
      <div className="h-12 bg-gray-400">
        <div className="border-2">
          <input
            type="text"
            name="name"
            className="w-3/4 p-2"
            value={name}
            placeholder="Enter your name"
            id="id_name"
            onChange={(evt) => setName(evt.target.value)}
          />
          <button className="bg-blue-400 p-2 w-1/4" onClick={() => onSubmit({ name })}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
