// src/components/ui/card.jsx

import React from "react";

/**
 * A simple Card container.
 *
 * @param {{ children: React.ReactNode; className?: string }} props
 */
export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Content wrapper inside a Card.
 *
 * @param {{ children: React.ReactNode; className?: string }} props
 */
export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
