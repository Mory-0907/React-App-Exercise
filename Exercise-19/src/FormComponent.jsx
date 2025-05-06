import { useInput } from "./hooks/useInput";

function FormComponent() {
  const { formData, handleChange, reset } = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${formData.username}\nPassword: ${formData.password}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login Form</h2>
      <div className="mb-3">
        <label className="block">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-3">
        <label className="block">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Invia
        </button>
        <button
          type="button"
          onClick={reset}
          className="bg-gray-500 text-white px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default FormComponent;