import { useNavigate } from 'react-router';

function EventForm({ event, method = 'post' }) {
  const navigate = useNavigate();
  const isEditing = event !== undefined;
  
  function cancelHandler() {
    navigate('..');
  }

  function submitHandler(formEvent) {
    formEvent.preventDefault();
    const formData = new FormData(formEvent.target);
    // const eventData = {
    //   title: formData.get('title'),
    //   image: formData.get('image'),
    //   date: formData.get('date'),
    //   description: formData.get('description'),
    // };
    const data = Object.fromEntries(formData.entries());
    
    // Handle form submission
    console.log('Form submitted with data:', data);
    // Add your API call logic here
    
    // Example: navigate back after successful submission
    // navigate('/events');
  }

  return (
    <form 
      onSubmit={submitHandler}
      method={method}
      className="max-w-2xl mx-auto my-8 bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {isEditing ? 'Edit Event' : 'Create New Event'}
      </h2>
      
      <div className="mb-6">
        <label 
          htmlFor="title" 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Title
        </label>
        <input 
          id="title" 
          type="text" 
          name="title" 
          defaultValue={event?.title || ''}
          required 
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      <div className="mb-6">
        <label 
          htmlFor="image" 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Image URL
        </label>
        <input 
          id="image" 
          type="url" 
          name="image" 
          required 
          defaultValue={event?.image || ''}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      <div className="mb-6">
        <label 
          htmlFor="date" 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Date
        </label>
        <input 
          id="date" 
          type="date" 
          name="date" 
          required 
          defaultValue={event?.date || ''}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      <div className="mb-8">
        <label 
          htmlFor="description" 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description
        </label>
        <textarea 
          id="description" 
          name="description" 
          rows="5" 
          required 
          defaultValue={event?.description || ''}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      <div className="flex gap-4 justify-end">
        <button 
          type="button" 
          onClick={cancelHandler}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
        >
          Cancel
        </button>
        <button 
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium shadow-sm"
        >
          {isEditing ? 'Update Event' : 'Create Event'}
        </button>
      </div>
    </form>
  );
}

export default EventForm;