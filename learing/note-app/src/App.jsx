import React from 'react'

const App = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [notes, setNotes] = React.useState([]);

  const setNotesHandler = () => {
    if (title.trim() === "" || description.trim() === "") {
      // stop the function here
      alert("Please fill in both title and description");
      return;
    }
    const newNote = {
      id: Date.now(),
      title,
      description
    }
    setNotes([...notes, newNote]);
  }

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  }

  const setDescriptionHandler = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotesHandler();
    setTitle("");
    setDescription("");
    // Handle form submission logic here
  }

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 p-2.5 bg-black/80 text-white text-center shadow-lg shadow-black/20 border border-white/10 backdrop-blur-md">Notes App</h2>
      <div className="flex flex-row gap-4 p-4 bg-black/100 from-zinc-950 via-zinc-900 to-black rounded-md h-70">
        <form onSubmit={(e) => {
          handleSubmit(e)
        }}
          className="flex flex-col justify-between gap-2 p-2.5 bg-white/8 rounded-md border border-white/10 shadow-lg shadow-black/20 w-1/4 text-[11px] backdrop-blur-md">
          <input
            value={title}
            onChange={(e) => {
              setTitleHandler(e)
            }}
            className="border border-white/10 bg-black/30 p-1.5 rounded-sm h-1/4 text-white placeholder-gray-300 focus:border-white/30 focus:ring-2 focus:ring-white/10 text-[11px]" type="text" placeholder="Title" />
          <textarea
            value={description}
            onChange={(e) => setDescriptionHandler(e)}
            className="h-full min-h-[6rem] border border-white/10 bg-black/30 p-1.5 rounded-sm text-left align-top resize-none text-white placeholder-gray-300 focus:border-white/30 focus:ring-2 focus:ring-white/10 text-[11px]" placeholder="Description" />
          <button className="flex justify-center items-center h-1/4 bg-white text-black p-1.5 rounded-sm hover:bg-gray-200 shadow-sm font-medium text-[11px]">Add Note</button>
        </form>
        <div className="w-3/4 p-3 bg-white/5 rounded-md border border-white/10 flex flex-col backdrop-blur-md">
          <h3 className="font-medium text-gray-100 text-sm">Your Notes</h3>
          <div className="grid grid-cols-4 gap-2 mt-2 p-2 bg-black/20 rounded-md shadow-inner border border-white/10 h-full overflow-y-auto">
           { 
              notes.slice().reverse().map((note) => {
                return <div key={note.id} className="flex flex-col justify-between bg-[url('https://imgs.search.brave.com/99Bj-vrG3yr2-_mvbwbNir2DYGgLc0FPxDKZhNgUf8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDUv/MDM1LzYyMi9zbWFs/bC9kcmF3bi1jYXJ0/b29uLW5vdGVwYWQt/cG5nLnBuZw')] bg-cover p-3 rounded-sm text-xs h-30 overflow-hidden">
                  <div className="min-h-0 flex-1 overflow-y-auto pr-1">
                    <p className="font-semibold text-black mt-2 text-[11px] break-words">{note.title}</p>
                    <p className="text-gray-900 text-[11px] break-words whitespace-pre-wrap">{note.description}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        const filteredNotes = notes.filter(n => n.id !== note.id);
                        setNotes(filteredNotes);
                      }}
                      className="bg-red-500 text-white px-1 py-0.5 rounded hover:bg-red-600 text-[10px] font-normal">
                      Delete
                    </button>

                  </div>


                </div>
              })
          }
          </div>
        </div>
      </div>

    </>
  )
}

export default App
