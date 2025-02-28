import React, { useState } from "react";

const MonumentGallery = () => {
  const [monuments, setMonuments] = useState([
    { 
      id: 1, 
      name: "Eiffel Tower", 
      description: "Iconic tower in Paris", 
      city: "Paris", 
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Notre_Dame_de_Paris.jpg" 
    },
    { 
      id: 2, 
      name: "Taj Mahal", 
      description: "Mausoleum in India", 
      city: "Agra", 
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Qutub_Minar%2C_New_Delhi.jpg" 
    },
    { 
      id: 3, 
      name: "Statue of Liberty", 
      description: "Symbol of freedom", 
      city: "New York", 
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Cologne_Cathedral.jpg" 
    },
    { 
      id: 4, 
      name: "Notre-Dame Cathedral", 
      description: "Gothic cathedral in Paris", 
      city: "Paris", 
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Notre_Dame_de_Paris.jpg" 
    },
    { 
      id: 5, 
      name: "Qutub Minar", 
      description: "A UNESCO World Heritage site in Delhi, India", 
      city: "Delhi", 
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Qutub_Minar%2C_New_Delhi.jpg" 
    },
    { 
      id: 6, 
      name: "Cologne Cathedral", 
      description: "One of the largest cathedrals in Europe", 
      city: "Cologne", 
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Cologne_Cathedral.jpg" 
    },
    { 
      id: 7, 
      name: "Victoria Memorial", 
      description: "A magnificent building in Kolkata, India", 
      city: "Kolkata", 
      image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Victoria_Memorial%2C_Kolkata.jpg" 
    },
    { 
      id: 8, 
      name: "Sagrada Familia", 
      description: "Famous basilica designed by Gaudí", 
      city: "Barcelona", 
      image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Sagrada_Familia%2C_Barcelona.jpg" 
    },
    { 
      id: 9, 
      name: "Fatehpur Sikri", 
      description: "A historical city built by Emperor Akbar", 
      city: "Agra", 
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Fatehpur_Sikri.jpg" 
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentMonument, setCurrentMonument] = useState(null);

  // Add a new monument
  const handleAdd = () => {
    setCurrentMonument({ id: Date.now(), name: "", description: "", city: "", image: "/images/default.jpg" });
    setDialogOpen(true);
  };

  // Edit an existing monument
  const handleEdit = (monument) => {
    setCurrentMonument(monument);
    setDialogOpen(true);
  };

  // Delete a monument
  const handleDelete = (id) => {
    setMonuments(monuments.filter((monument) => monument.id !== id));
  };

  // Save or update a monument
  const handleSave = () => {
    setMonuments((prev) => {
      const exists = prev.find((m) => m.id === currentMonument.id);
      return exists ? prev.map((m) => (m.id === currentMonument.id ? currentMonument : m)) : [...prev, currentMonument];
    });
    setDialogOpen(false);
  };

  return (
    <div className="p-4">
      {/* Top controls */}
      <div className="flex gap-2 mb-4">
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add Monument</button>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      {/* Monuments Grid */}
      <div className="grid grid-cols-3 gap-6">
        {monuments.filter((m) => m.name.toLowerCase().includes(searchTerm.toLowerCase())).map((monument) => (
          <div key={monument.id} className="border shadow-lg p-4 rounded-md">
            <img
              src={monument.image || "/images/default.jpg"}
              alt={monument.name}
              className="w-full h-32 object-cover rounded-md cursor-pointer"
              onClick={() => handleEdit(monument)}
            />
            <div className="mt-2">
              <h3 className="font-bold text-lg">{monument.name}</h3>
              <p className="text-sm">{monument.description}</p>
              <p className="text-sm text-gray-500">{monument.city}</p>
              <button
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded w-full"
                onClick={() => handleDelete(monument.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Add/Edit */}
      {dialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">{currentMonument.id ? "Edit Monument" : "Add Monument"}</h2>
            <input
              type="text"
              placeholder="Name"
              value={currentMonument.name}
              onChange={(e) => setCurrentMonument({ ...currentMonument, name: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Description"
              value={currentMonument.description}
              onChange={(e) => setCurrentMonument({ ...currentMonument, description: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="City"
              value={currentMonument.city}
              onChange={(e) => setCurrentMonument({ ...currentMonument, city: e.target.value })}
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={currentMonument.image}
              onChange={(e) => setCurrentMonument({ ...currentMonument, image: e.target.value })}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSave}>
                Save
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setDialogOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonumentGallery;
