"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ReviewForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/Anime", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "Content-Type": "application/json",
      });
    } catch (error) {
      console.error("An error occurred:", error.message);
    }

    //reset the fields but not working
    router.refresh();
  };

  const handleChange = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;

    // setFormData((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));

    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Update the genre array based on the checkbox checked state
      if (checked) {
        setFormData((prevState) => ({
          ...prevState,
          genre: [...prevState.genre, value], // Add the checkbox value to the genre array
        }));
      }
    } else {
      // For other input types, update the state normally
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const startingReviewData = {
    title: "",
    description: "",
    genre: [],
    rating: "5",
  };

  const [formData, setFormData] = useState(startingReviewData);

  return (
    <div>
      <div className="flex justify-center p-10">
        <form
          className="container flex flex-col bg-slate-300 rounded p-10"
          onSubmit={handleSubmit}
        >
          <h1>Review Form</h1>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            rows="5"
            onChange={handleChange}
          />

          <label>Genre</label>
          <div>
            <input
              type="checkbox"
              name="adventure"
              value="adventure"
              onChange={handleChange}
            />
            <label>Adventure</label>
            <input
              type="checkbox"
              name="romance"
              value="romance"
              onChange={handleChange}
            />
            <label>Romance</label>
            <input
              type="checkbox"
              name="fantasy"
              value="fantasy"
              onChange={handleChange}
            />
            <label>Fantasy</label>
            <input
              type="checkbox"
              name="slice of life"
              value="slice of life"
              onChange={handleChange}
            />
            <label>Slice of Life</label>
          </div>

          <label>Rating</label>
          <select name="rating" value={formData.rating} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            type="submit"
            className="bg-slate-500 w-1/6 mt-5 rounded hover:bg-slate-600 text-white p-2"
          />
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
