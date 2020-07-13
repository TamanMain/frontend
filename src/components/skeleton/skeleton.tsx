import React from "react";
import "./skeleton.css";

export const Skeleton: React.FC = () => {
  return <div className="skeleton"></div>;
};

export const SkeletonCircle: React.FC = () => {
  return <div className="skeleton circle"></div>;
};

export const SkeletonText: React.FC = () => {
  return <div className="skeleton text"></div>;
};
