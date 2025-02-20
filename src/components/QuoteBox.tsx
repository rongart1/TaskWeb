import React from 'react';

export default function QuoteBox({ sentence = "Your inspiring quote goes here.", author = "Anonymous" }) {
  return (
    <footer className="bg-light py-3 border-top text-center fixed-bottom">
      <div className="container">
        <p className="mb-1 fst-italic">{sentence}</p>
        <p className="fw-bold mb-0">- {author}</p>
      </div>
    </footer>
  );
}