# FullStack_Assignment

## Monument Gallery App
A simple React app to manage a gallery of monuments with CRUD functionality (Create, Read, Update, Delete). Users can search for monuments, view their details, and add, edit, or delete them. The app uses local state management and allows for the display of images, descriptions, and cities of various monuments.

### App.js
Purpose:
App.js serves as the main entry point for the application. It contains the MonumentGallery component, which is responsible for rendering the list of monuments and the search functionality.

Key Features:

- Initializes the state for monuments, search term, dialog visibility, and the current monument.
- Handles CRUD operations (Add, Edit, Delete) for monuments.
- Displays the monument gallery and passes the necessary props to the Card and Dialog components.

### Main Functions in App.js:
- handleAdd: Opens the dialog to add a new monument.
- handleEdit: Opens the dialog with pre-filled details of the selected monument.
- handleDelete: Deletes a selected monument from the gallery.
- handleSave: Saves or updates a monument in the gallery.

-------

### Button.js
Purpose:
The Button.js component is a reusable button used throughout the app. It accepts different properties like label, onClick function, and styles to customize its appearance.

Key Features:

Accepts props for customizing the button text (label), onClick action (onClick), and button style (className).


--------

### Card.js
Purpose:
The Card.js component is used to display each individual monument’s details (name, description, and city) along with an image. It also includes buttons to edit or delete the monument.

Key Features:

Displays monument data (name, description, city, image).
Includes buttons to trigger edit and delete operations.


-----

### Input.js
Purpose:
Input.js is a reusable component used to handle form input fields. It accepts properties like type, placeholder, value, and onChange to customize the input field’s behavior and styling.

Key Features:

Accepts input values such as name, description, city, and image for monuments.
Triggers the onChange handler passed as a prop to update the monument’s details.


------- 

### Dialog.js
Purpose:
Dialog.js is a modal component that displays a form for adding or editing monument details. It includes input fields for monument name, description, city, and image URL, as well as buttons to save or cancel the operation.

Key Features:

Handles the dialog visibility and form submission for adding/editing monuments.
Passes input values to the parent component (e.g., App.js) for saving the changes.
