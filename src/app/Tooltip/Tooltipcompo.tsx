"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/Images/img1.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "/Images/img2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
     "/Images/img3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "/Images/img4.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "/Images/img5.jpg",
      },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "/Images/img6.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    
      <AnimatedTooltip items={people} />
    
  );
}
