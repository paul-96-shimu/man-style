import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/Authcontex';

const Review = () => {
  const { productId } = useParams();
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:3000/reviews/${productId}`);
      setReviews(res.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to submit a review.");
      return;
    }

    if (!reviewText.trim()) {
      alert("Review text cannot be empty.");
      return;
    }

    const newReview = {
      productId,
      userName: user.displayName || user.email,
      userEmail: user.email,
      reviewText,
      rating,
      timestamp: new Date().toISOString() // server timestamp fallback
    };

    setSubmitting(true);
    try {
      const res = await axios.post("http://localhost:3000/reviews", newReview);

      if (res.status === 201 || res.data.success) {
        setReviewText("");
        setRating(5);
        fetchReviews(); // refresh reviews
        alert("Review submitted successfully!");
      } else {
        alert("Failed to submit review. Check your input.");
      }
    } catch (error) {
      console.error("Review submit error:", error.response?.data || error);
      alert("Failed to submit review. Make sure all fields are valid.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Product Reviews</h2>

      {/* Review List */}
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul className="mb-6">
          {reviews.map((rev) => (
            <li key={rev._id} className="border p-3 mb-3 rounded shadow-sm">
              <p><strong>{rev.userName}</strong> - {rev.rating}⭐</p>
              <p>{rev.reviewText}</p>
              <p className="text-xs text-gray-500">
                {rev.timestamp ? new Date(rev.timestamp).toLocaleString() : "Unknown date"}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Your Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full border p-2 rounded"
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>{r}⭐</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold">Your Review:</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full border p-2 rounded"
            rows={4}
            placeholder="Write your review here..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {submitting ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default Review;
